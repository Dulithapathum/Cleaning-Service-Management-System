import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookingRoutes from "./routes/bookings.js";
import authRoutes from "./routes/auth.js";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
