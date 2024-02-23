const { Schema, model } = require("mongoose");

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
    },
    doctor_fees: {
        type: String,
        required: true
    },
    schedule_day: {
        type: Array,
        required: true
    },
    schedule_time: {
        type: Array,
        required: true
    },
    specialtyId: {
        type: Schema.Types.ObjectId,
        ref: "Specialty"
    }
}, {
    timestamps: true
})

const doctorModel = model("Doctor", doctorSchema);

module.exports = doctorModel;

