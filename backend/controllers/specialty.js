const Specialty = require("../models/specialty");
const Doctor = require("../models/doctor");

exports.getSpecialtyList = (req, res) => {
    return Specialty.find().then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(422).json(err);
    });
}

exports.filterSpecialty = (req, res) => {
    const { id } = req.body;
    return Doctor.find({ specialtyId: id }).populate("specialtyId").then((result) => {
        return res.status(200).json(result);
    }).catch((err) => {
        return res.status(422).json(err);        
    });
}

exports.searchByName = async (req, res) => {
    const { search } = req.body;
    const pattern = new RegExp(search.toString(), "i");
    const specialtyDoc = await Specialty.find({ name: {$regex: pattern}});
    return res.status(200).json(specialtyDoc);
}