import express from 'express';
import userRouter from './routes/user.routes.js';
import exerciseRouter from './routes/exercise.routes.js'
import cookieParser from 'cookie-parser'

const app = express();
app.use(express.json())
app.use(cookieParser())

app.use('/api', userRouter);
app.use('/api', exerciseRouter);

export default app;