import { Request, Response } from 'express';
import { z } from 'zod';
import { query } from '../db';
import { handleError } from '../utilities'

const TodoSchema = z.object({
  title: z.string(),
  completed: z.boolean().default(false),
})

export const getTodos = async (req: Request, res: Response) => {
  const result = await query('SELECT * FROM todos');
  res.json(result.rows);
};

export const addTodo = async (req: Request, res: Response) => {
  try {
    const data = TodoSchema.parse(req.body);
    const result = await query('INSERT INTO todos (title, completed) VALUES ($1, $2) RETURNING *', [data.title, data.completed])
    res.status(201).json(result.rows[0])
  } catch (error) {
    if (res instanceof require('express').response.constructor) {
        handleError(error, res);
    } else {
        console.error('Invalid Response object passed.');
    }
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await query('DELETE FROM todos WHERE id = $1', [id])
  res.status(204).send()
};
