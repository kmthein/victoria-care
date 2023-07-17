import { db } from "../db.js";

export const getSpecialtyList = (req, res) => {
    const q = "SELECT * FROM specialty";

    db.query(q, (err, data) => {
        if(err) return res.send(err);
        return res.status(200).json(data);
    })
}

export const searchSpecialtyByName = (req, res) => {
    const q = "SELECT * FROM specialty WHERE specialty_name LIKE (?)";
    const value = `%${req.body.search}%`

    db.query(q, [value], (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })

}

export const filterSpecialty = (req, res) => {
    const q = "SELECT * FROM doctor WHERE specialty_id = ?";
    const id = req.body.id;

    db.query(q, [id], (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data);
    })
}