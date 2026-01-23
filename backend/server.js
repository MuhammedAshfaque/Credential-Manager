import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import credentialRouter from './routes/credentialRoutes.js'

dotenv.config()

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB() 
// middlewares
app.use(express.json())
app.use(cors({
  origin: [
    "http://localhost:5173",
  ],
  credentials: true
}));

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/credentials", credentialRouter);

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => 
  console.log(`Server started on PORT:${port}`)
)