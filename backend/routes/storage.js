import express from "express";
import multer from 'multer';
import path from 'path';
import { db } from "../db.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: "./public/upload",
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage });
  
  router.post("/upload/:userId", upload.single("image"), (req, res) => {
      const image = req.file.filename;
      const {userId} = req.params;
      const q = "UPDATE users SET images = ? WHERE id = ?";
      db.query(q, [image, userId], (err, data) => {
          if(err) return res.status(500).json("Error");
          return res.status(200).json({Status: "Success"});
      })
  });

export default router;