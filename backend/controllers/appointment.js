import { db } from "../db.js";

export const addAppointment = (req, res) => {
  const q =
    "INSERT INTO `appointment`(`patient_name`, `email`, `doctor_name`, `specialty`, `date`, `time`, `contact_no`, `prev_record`, `description`, `fees`, `status`, `appointed_at`, `patient_id`, `doctor_id`) VALUES (?)";
  const { name, email, doctor_name, special, date, time, contact_no, prevRec, description, fees, status, todayDate, user_id, doctor_id } = req.body.values;

  const values = [ name, email, doctor_name, special, date, time, contact_no, prevRec, description, fees, status, todayDate, user_id, doctor_id ];

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
  const q = "SELECT * FROM `appointment` WHERE patient_id = (?) AND status = 'Paid'";
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

export const getAppointmentID = (req, res) => {
  const q = "SELECT id FROM `appointment` WHERE patient_id = (?) ORDER BY id DESC LIMIT 1";
  db.query(q, [req.body.id], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const confirmPayment = (req, res) => {
  const q = "INSERT INTO `payment`(`amount`, `date`, `time`, `user_id`, `user_name`, `appointment_id`) VALUES (?)";

  const { amount, date, time, patient_id, patient_name, appointment_id } = req.body.values;
  const values = [amount, date, time, patient_id, patient_name, appointment_id];
  db.query(q, [values], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const updatePaymentStatus = (req, res) => {
  const q = "UPDATE `appointment` SET `status`='Paid' WHERE patient_id = (?) AND id = (?)";
  db.query(q, [req.body.pid, req.body.aid], (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}

export const getPaymentData = (req, res) => {
  const q = "SELECT * FROM payment";
  db.query(q, (err, data) => {
    if(err) return res.status(500).json(err);
    return res.status(200).json(data);
  })
}