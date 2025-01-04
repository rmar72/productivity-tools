import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import todoRoutes from './routes/todos';

dotenv.config();
const PORT = process.env.PORT || 8081;

const app: Application = express();

app.use(express.json());

app.use('/api/todos', todoRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to TS To-do List API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});