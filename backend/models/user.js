const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_num: {
        type: String,
    },
    dob: {
        type: Date,
    },
    images: {
        type: String,
        default: ""
    },
    password: {
        type: String
    },
    user_role: {
        type: String,
        default: "client"
    }
}, {
    timestamps: true
});

const userModel = model("User", userSchema);

module.exports = userModel;