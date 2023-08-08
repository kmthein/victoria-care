import { db } from "../db.js";

export const getSpecialtyList = (req, res) => {
  const q = "SELECT * FROM specialty";

  db.query(q, (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getSingleSpecialty = (req, res) => {
  const q = "SELECT * FROM specialty WHERE id = ?";

  db.query(q, [req.body.id], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const updateSingleSpecialty = (req, res) => {
  const q = "UPDATE `specialty` SET `specialty_name`= ? WHERE `id` = ?";

  db.query(q, [req.body.name, req.body.id], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const deleteSpecialty = (req, res) => {
  const q = "DELETE FROM `specialty` WHERE id = ?";

  db.query(q, [req.body.id], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const addNewSpecialty = (req, res) => {
  // Check name already exist
  const q = "SELECT * FROM `specialty` WHERE specialty_name = ?";

  db.query(q, [req.body.name], (err, data) => {
    if (err) return res.json(err);
    if (data.length)
      return res.status(409).json("Specialty name has been existed.");

    const q = "INSERT INTO `specialty`(`specialty_name`) VALUES (?)";

    db.query(q, [req.body.name], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("New specialty has been added.");
    });
  });
};

export const searchSpecialtyByName = (req, res) => {
  const q = "SELECT * FROM specialty WHERE specialty_name LIKE (?)";
  const value = `%${req.body.search}%`;

  db.query(q, [value], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const filterSpecialty = (req, res) => {
  const q = "SELECT * FROM doctor WHERE specialty_id = ?";
  const id = req.body.id;

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const getDoctorSpecialty = (req, res) => {
  const q = "SELECT * FROM specialty WHERE id = ?";
  const id = req.body.id;

  db.query(q, [id], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
