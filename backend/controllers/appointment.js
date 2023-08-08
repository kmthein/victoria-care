import { db } from "../db.js";

export const addAppointment = (req, res) => {
  const q =
    "INSERT INTO `appointment`(`patient_name`, `email`, `doctor_name`, `specialty`, `date`, `time`, `contact_no`, `prev_record`, `description`, `fees`, `appointed_at`, `patient_id`, `doctor_id`) VALUES (?)";
  const { name, email, doctor_name, special, date, time, contact_no, prevRec, description, fees, todayDate, user_id, doctor_id } = req.body.values;

  const values = [ name, email, doctor_name, special, date, time, contact_no, prevRec, description, fees, todayDate, user_id, doctor_id ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const selectAppointment = (req, res) => {
  const q = "SELECT * FROM `appointment`";
  db.query(q, (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const getAppointmentByUser = (req, res) => {
  const q = "SELECT * FROM `appointment` WHERE patient_id = (?)";
  const id = req.body.id;
  db.query(q, [id], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const getAppointmentDetail = (req, res) => {
  const q = "SELECT * FROM `appointment` WHERE id = (?)";
  const id = req.body.id;
  db.query(q, [id], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const getAllAppointments = (req, res) => {
  const q = "SELECT * FROM `appointment`";
  db.query(q, (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const confirmPayment = (req, res) => {
  const q = "INSERT INTO `payment`(`amount`, `date`, `time`, `user_id`, `user_name`) VALUES (?)";

  const { amount, date, time, patient_id, patient_name } = req.body.values;
  const values = [amount, date, time, patient_id, patient_name];
  console.log(values);
  db.query(q, [values], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}