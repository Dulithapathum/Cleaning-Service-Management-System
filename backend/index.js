import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import bookingRoutes from "./routes/bookings.js";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use("/api/bookings", bookingRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
