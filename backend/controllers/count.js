import { db } from "../db.js";

export const totalDoctors = (req, res) => {
    const q = `SELECT COUNT(id) as total FROM doctor`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const totalSpecialty = (req, res) => {
    const q = `SELECT COUNT(id) as total FROM specialty`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const totalUser = (req, res) => {
    const q = `SELECT COUNT(id) as total FROM users WHERE user_role_id = 1`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const totalAppointment = (req, res) => {
    const q = `SELECT COUNT(id) as total FROM appointment`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}