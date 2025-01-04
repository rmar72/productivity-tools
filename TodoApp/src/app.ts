import express, { Application } from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos';

dotenv.config();

const app: Application = express();
app.use(express.json());
app.use('/api/todos', todoRoutes);

export default app;