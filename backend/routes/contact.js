import express from 'express';
import { sendContactMsg } from '../controllers/contact.js';

const router = express.Router();

router.post('/add', sendContactMsg);

export default router;