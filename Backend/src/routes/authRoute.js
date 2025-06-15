import express from 'express';
import { login_user, register_user } from '../controller/authController.js';
import {authMiddleware }from '../middleware/authMiddleware.js';
import { get_current_user } from '../controller/authController.js';
// This file defines the routes for user authentication, including registration, login, and logout.

const router = express.Router();

router.post('/register', register_user);
router.post('/login', login_user);
router.get('/me', authMiddleware , get_current_user);

export default router;  