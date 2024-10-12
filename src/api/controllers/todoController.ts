import { Request, Response } from 'express';
import Todo from '../models/Todo'; // Ajuste o caminho conforme a estrutura do seu projeto

class TodoController {
    // Criar uma nova tarefa
    async create(req: Request, res: Response) {
        try {
            const { task } = req.body;
            const newTodo = new Todo({ task });
            await newTodo.save();
            res.status(201).json(newTodo);
        } catch (error) {
            res.status(500).json({ message: 'Error creating todo', error });
        }
    }

    // Listar todas as tarefas
    async getAll(req: Request, res: Response) {
        try {
            const todos = await Todo.find();
            res.status(200).json(todos);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving todos', error });
        }
    }

    // Atualizar uma tarefa
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedTodo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(200).json(updatedTodo);
        } catch (error) {
            res.status(500).json({ message: 'Error updating todo', error });
        }
    }

    // Deletar uma tarefa
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedTodo = await Todo.findByIdAndDelete(id);
            if (!deletedTodo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            res.status(204).send(); // No content
        } catch (error) {
            res.status(500).json({ message: 'Error deleting todo', error });
        }
    }
}

export default new TodoController();
