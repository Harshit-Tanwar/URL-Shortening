import express from 'express';
import {authMiddleware }from '../middleware/authMiddleware.js';
import { getAllUserUrls } from '../controller/userController.js';



const router = express.Router();

router.post('/urls', authMiddleware , getAllUserUrls);

export default router;  