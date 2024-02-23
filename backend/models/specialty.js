const { Schema, model } = require("mongoose");

const specialtySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const specialtyModel = model("Specialty", specialtySchema); 

module.exports = specialtyModel;