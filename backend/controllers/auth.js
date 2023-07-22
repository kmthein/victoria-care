import jwt from "jsonwebtoken";
import { db } from "../db.js";
import bcrypt from "bcryptjs";
import { LocalStorage } from "node-localstorage";

export const register = (req, res) => {
  // Check user already exist
  const q = "SELECT * FROM `users` WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Email has already existed!");

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    // Create new user
    const q =
      "INSERT INTO `users`(`name`, `email`, `phone_num`, `dob`, `password`, `user_role_id`) VALUES (?)";
    const values = [
      req.body.name,
      req.body.email,
      req.body.phone_num,
      req.body.dob,
      hash,
      1,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User registeration completed.");
    });
  });
};

export const changePassword = (req, res) => {
  const q = "SELECT * FROM users WHERE id = ?";
  
  db.query(q, [req.body.id], (err, data) => {
    if(err) return res.json(err);
    return res.status(200).json(data);
  })
}

export const login = (req, res) => {
  // Check email
  const q = "SELECT * FROM users WHERE email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("Email is not found.");

    // Check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Wrong username or password!");

    const token = jwt.sign({ id: data[0].id }, "jwtkey");
    const { password, ...other } = data[0];

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
    res.json("logout")
};
