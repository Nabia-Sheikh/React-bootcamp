import {addTodo,  getTodo } from "../controller/todoController.js";
import express from "express";
const route = express.Router();

route.post("/addTodo", addTodo)
route.get("/getTodo", getTodo)

export default route;
