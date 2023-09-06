import { db } from "../db.js";

export const getAllUsers = (req, res) => {
    const q = "SELECT * FROM users WHERE user_role_id = 1";

    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const getUser = (req, res) => {
    const q = "SELECT * FROM users WHERE user_role_id = 1 AND id = ?";
    const id = req.body.id

    db.query(q, [id], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const getAdmin = (req, res) => {
    const q = "SELECT * FROM users WHERE user_role_id = 2 AND id = ?";
    const id = req.body.id

    db.query(q, [id], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const updateUser = (req, res) => {
    const userId = req.body.id;

    const q = "UPDATE `users` SET `name`= ?,`email`= ?,`phone_num`= ?,`dob`= ? WHERE id = ?"

    const {name, email, phone_num, dob} = req.body.values;

    db.query(q, [name, email, phone_num, dob, userId], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("Profile has been updated");
    })
}

export const deleteUser = (req, res) => {
    const userId = req.body.id;

    const q = "DELETE FROM `users` WHERE id = ?";

    db.query(q, [userId], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json("User deleted successfully.")
    })
}

export const searchUserByName = (req, res) => {
    const q = "SELECT * FROM users WHERE name LIKE (?)";
    const value = `%${req.body.search}%`;
  
    db.query(q, [value], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json(data);
    });
  };