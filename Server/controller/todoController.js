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
   const todoRef = await Todo.findByIdAndUpdate(req.params.id, {
     done: !req.body.done,
   });
    const todo = await todoRef.save();

   return res.status(200).json(todo)
 } catch (error) {
   return res.status(500).json(error.message)
 }
}

export const updateTodo = async (req, res) => {
try {
  await Todo.findOneAndUpdate(
    { _id: req.params.id },
    { data: req.body.data }
  )

  const todo = await Todo.findById(req.params.id)

  return res.status(200).json(todo)
} catch (error) {
  return res.status(500).json(error.message)
}
}

export const DeleteTodo = async (req, res) => {
 try {
   const todo = await Todo.findByIdAndDelete(req.params.id)

   return res.status(200).json(todo)
 } catch (error) {
   return res.status(500).json(error.message)
 }
}