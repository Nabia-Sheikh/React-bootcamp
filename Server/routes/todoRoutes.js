import addTodo from "../controller/todoController.js";
import express from "express";
const route = express.Router();

route.post("/todo", addTodo)

export default route;
