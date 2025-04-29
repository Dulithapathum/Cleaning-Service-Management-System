import Booking from "../models/Booking.js";

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user_id: req.user.id }).populate(
      "service_id"
    );
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};
