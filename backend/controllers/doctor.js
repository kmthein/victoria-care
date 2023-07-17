import { db } from "../db.js";

export const getDoctorList = (req, res) => {
    const q = "SELECT * FROM doctor";

    db.query(q, (err, data) => {
        if(err) return res.send(err);
        
        return res.status(200).json(data);
    })
}
