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

export const toggleTodo = async (req, res) => {
  try {
    const { id }  = req.params;
    // console.log(id);
    const todo = await Todo.findById(id);
    // console.log(todo);
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { done: !todo.done },
      { new: true }
    )
    res.status(200).json(updatedTodo)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { data }, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const DeleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndRemove(id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}