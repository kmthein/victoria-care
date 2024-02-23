const User = require("../models/user");

exports.updateUser = (req, res) => {
    const { values, id } = req.body;
    const { name, email, phone_num, dob } = values;
    let userDoc;
    return User.findById(id).then((user) => {
        user.name = name;
        user.email = email;
        user.phone_num = phone_num;
        user.dob = dob;
        user.save();
        const {password, user_role, ...other} = user._doc;
        userDoc = other;
    }).then((user) => {
        return res.status(200).json(userDoc);
    }).catch((err) => {
        return res.status(422).json("User update failed.");        
    });
}

exports.totalUser = (req, res) => {
    return User.find({user_role: "client"}).then((user) => {
        return res.status(200).json(user);
    }).catch((err) => {
        return res.status(422).json("User data not found.");        
    });
}

exports.getUserDetail = (req, res) => {
    const {id} = req.params;
    return User.findById(id).then((user) => {
        return res.status(200).json(user);
    }).catch((err) => {
        return res.status(422).json("User data not found.");        
    });
}
