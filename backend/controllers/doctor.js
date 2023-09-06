import { db } from "../db.js";

export const getDoctorList = (req, res) => {
  const q = "SELECT * FROM doctor";

  db.query(q, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getSingleDoctor = (req, res) => {
  const q = "SELECT * FROM doctor WHERE id = ?";
  const id = req.body.id;

  db.query(q, [id], (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const addNewDoctor = (req, res) => {
  const q =
    "INSERT INTO `doctor` (`name`, `qualification`, `contact_no`, `doctor_fees`, `schedule_day`, `schedule_time`, `specialty_id`) VALUES (?)";

  const {
    name,
    qualification,
    contact_no,
    fees,
    schedule_day,
    schedule_time,
    specialty_id,
  } = req.body.values;

  const values = [
    name,
    qualification,
    contact_no,
    fees,
    schedule_day,
    schedule_time,
    specialty_id,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Doctor added successfully.");
  });
};

export const deleteUser = (req, res) => {
  const id = req.body.id;

  const q = "DELETE FROM `doctor` WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("User deleted successfully.");
  });
};

export const updateDoctor = (req, res) => {
  const q =
    "UPDATE `doctor` SET `name`= ?,`qualification`= ?,`contact_no`= ?,`schedule_day`= ?,`schedule_time`= ?,`specialty_id`= ? WHERE id = ?";

  const {
    id,
    name,
    qualification,
    contact_no,
    schedule_day,
    schedule_time,
    specialty_id,
  } = req.body.values;

  const doctorId = id;

  db.query(
    q,
    [
      name,
      qualification,
      contact_no,
      schedule_day,
      schedule_time,
      specialty_id,
      doctorId,
    ],
    (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("Doctor has been updated.");
    }
  );
};

export const searchDoctorByName = (req, res) => {
  const q = "SELECT * FROM doctor WHERE name LIKE (?)";
  const value = `%${req.body.search}%`;

  db.query(q, [value], (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};
