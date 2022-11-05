import express from "express"
import connectDB from "./database/db.js"
const app = express()

const PORT = 8080
connectDB()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
