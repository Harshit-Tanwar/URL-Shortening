
import express from 'express';
import connectDB from './src/config/mongo.js';
import shortUrl from './src/routes/shortUrlRoute.js';
import authRoute from './src/routes/authRoute.js';
import userRoute from './src/routes/userRoute.js';
import { redirectFromShortUrl } from './src/controller/shortUrl.contoller.js';
import cors from 'cors';
import dotenv from 'dotenv';
import { attachUser } from './src/utils/attachUser.js';
import cookieParser from 'cookie-parser';
dotenv.config('./.env');

const app = express();
app.use(cors(
  {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(attachUser);


app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/create', shortUrl );
app.get('/:id', redirectFromShortUrl);

app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});