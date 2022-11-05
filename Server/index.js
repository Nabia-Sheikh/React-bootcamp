import express from "express"
import connectDB from "./database/db.js"
import Routes from "./routes/todoRoutes.js"
const app = express()
import cors from "cors"

app.use(cors())

// Connect to MongoDB
connectDB()

// Middleware
app.use(express.json())

// Routes
app.use('/api', Routes)

// Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
