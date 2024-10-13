import { Router } from 'express';
import TodoController from '../api/controllers/todoController'; 

const router = Router();

router.post('/todos', TodoController.create);
router.get('/todos', TodoController.getAll);
router.put('/todos/:id', TodoController.update);
router.delete('/todos/:id', TodoController.delete);

export { router };
