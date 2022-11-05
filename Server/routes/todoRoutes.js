import {
  addTodo,
  getTodo,
  toggleTodo,
  updateTodo,
  DeleteTodo,
} from "../controller/todoController.js"
import express from "express";
const route = express.Router();

route.post("/addTodo", addTodo)
route.get("/getTodo", getTodo)
route.get("/toggleTodo/:id", toggleTodo)
route.get("/updateTodo/:id", updateTodo)
route.get("/deleteTodo/:id", DeleteTodo)

export default route;
