import Todo from "../model/todoModel.js";

const addTodo = async (req, res) => {
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

export default addTodo;