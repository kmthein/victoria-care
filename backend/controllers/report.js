import { db } from "../db.js";

export const getMonthlyNewUser = (req, res) => {
    const q = "SELECT * FROM users WHERE MONTH(created_at) = MONTH(CURRENT_DATE()) AND user_role_id = 1";
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const getMonthlyDoctor = (req, res) => {
    const q = `SELECT doctor_name,COUNT(doctor_name) as total_appointment FROM appointment WHERE MONTH(appointed_at) = MONTH(CURRENT_DATE()) GROUP BY doctor_name ORDER BY COUNT(doctor_name) DESC;`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const getDailyAppointment = (req, res) => {
    const q = `SELECT * FROM appointment WHERE DAY(appointed_at) = DAY(CURRENT_DATE())`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}

export const getMonthlyAppointment = (req, res) => {
    const q = `SELECT * FROM appointment WHERE MONTH(appointed_at) = MONTH(CURRENT_DATE())`;
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}