import Todo from "../model/todoModel.js";

export const addTodo = async (req, res) => {
  try {
    const { data } = req.body;
    const newTodo = new Todo({
      data,
      createdAt: new Date().toISOString(),
      done: false,
    });
    const todo = await newTodo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const getTodo = async (req, res) => {
  try {
    const todo = await Todo.find().sort({ createdAt: -1 });
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

