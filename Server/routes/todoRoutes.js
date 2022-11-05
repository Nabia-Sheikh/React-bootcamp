import {addTodo,  getTodo, toggleTodo } from "../controller/todoController.js";
import express from "express";
const route = express.Router();

route.post("/addTodo", addTodo)
route.get("/getTodo", getTodo)
route.put("/toggleTodo", toggleTodo)

export default route;
