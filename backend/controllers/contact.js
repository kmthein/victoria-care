import { db } from "../db.js";

export const sendContactMsg = (req, res) => {
    const q = "INSERT INTO `contact`(`name`, `email`, `subject`, `phone`, `message`) VALUES (?)"

    const {name, email, subject, phone, message} = req.body.values;
    const values = [name, email, subject, phone, message];
    db.query(q, [values], (err, data) => {
        if(err) return res.status(500).json(err);
        return res.status(200).json(data);
    })
}