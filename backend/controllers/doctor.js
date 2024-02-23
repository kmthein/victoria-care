const Doctor = require("../models/doctor");

exports.getDoctorList = (req, res) => {
    return Doctor.find().populate("specialtyId").then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        return res.status(422).json(err);
    });
}

exports.searchByName = async (req, res) => {
    const { search } = req.body;
    const pattern = new RegExp(search.toString(), "i");
    const searchDoc = await Doctor.find({ name: {$regex: pattern}});
    return res.status(200).json(searchDoc);
}

exports.totalDoctor = (req, res) => {
    return Doctor.find().countDocuments().then((count) => {
    })
}