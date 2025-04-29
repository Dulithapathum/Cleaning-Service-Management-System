import express from "express";
import {
  getBookings,
  addBooking,
  updateBooking,
  deleteBooking,
  getBookingById,
} from "../controllers/bookingController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getBookings);
router.get("/:id", protect, getBookingById);
router.post("/", protect, addBooking);
router.put("/:id", protect, updateBooking);
router.delete("/:id", protect, deleteBooking);

export default router;
