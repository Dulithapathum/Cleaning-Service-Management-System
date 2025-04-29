import express from "express";
import {
  getBookings,
  addBooking,
  updateBooking,
  deleteBooking,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getBookings);
router.post("/", protect, addBooking);
router.put("/:id", protect, updateBooking);
router.delete("/:id", protect, deleteBooking);

export default router;
