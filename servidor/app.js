import 'dotenv/config'
import express from 'express';
import userRouter from './routes/user.routes.js';
import exerciseRouter from './routes/exercise.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: process.env.URL_FRONT,
    credentials: true
}));

app.use('/api', userRouter);
app.use('/api', exerciseRouter);

export default app;