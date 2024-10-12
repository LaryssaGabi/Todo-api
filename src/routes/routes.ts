import { Router } from 'express';
import TodoController from '../api/controllers/todoController'; 

const router = Router();

router.post('/todos', TodoController.create);
router.get('/todos', TodoController.getAll);

export { router };
