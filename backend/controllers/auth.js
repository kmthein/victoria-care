const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");

exports.register = (req, res) => {
  const { name, email, phone_num, dob, password } = req.body.input;
  const role = req.body.role;
  User.findOne({email}).then((user) => {
    if(user) {
        throw new Error("Email already existed.");
    } else {
        bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          return User.create({
            name,
            email,
            phone_num,
            dob,
            password: hashedPassword,
            user_role: role && "admin"
          }).then((result) => {
            return res.status(201).json("User created successfully.");
          });
        }).catch((err) => {
            return res.status(422).json(err.message);
        });
    }
  }).catch((err) => {
    return res.status(422).json(err.message);
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  return User.findOne({email}).then((user) => {
    if(user) {
        bcrypt.compare(password, user.password).then((isMatch) => {
            if(!isMatch) {
                throw new Error("Wrong email or password.");
            } else {
                const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_KEY);
                const {password, ...other} = user._doc;
                return res.status(200).json({token, user: other});
            }
        }).catch((err) => {
            return res.status(422).json(err.message);
          });
    } else {
        throw new Error("User not found with this email.");
    }
  }).catch((err) => {
    return res.status(422).json(err.message);
  });
};

exports.adminLogin = (req, res) => {
    const { email, password } = req.body;
    return User.findOne({email}).then((user) => {
      if(user) {
        if(user.user_role !== "admin") {
            throw new Error("Wrong email or password.");
        }
          bcrypt.compare(password, user.password).then((isMatch) => {
              if(!isMatch) {
                  throw new Error("Wrong email or password.");
              } else {
                  const token = jwt.sign({email: user.email, id: user._id}, process.env.JWT_KEY);
                  const {password, ...other} = user._doc;
                  return res.status(200).json({token, user: other});
              }
          }).catch((err) => {
              return res.status(422).json(err.message);
            });
      } else {
          throw new Error("User not found with this email.");
      }
    }).catch((err) => {
      return res.status(422).json(err.message);
    });
  };

