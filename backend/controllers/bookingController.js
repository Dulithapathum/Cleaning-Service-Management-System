import Booking from "../models/Booking.js";

// Get Booking
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

// Add Booking
exports.addBooking = async (req, res) => {
  const { customer_name, address, date_time, service_id } = req.body;
  if (!customer_name || !address || !date_time || !service_id) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newBooking = new Booking({
      customer_name,
      address,
      date_time,
      service_id,
      user_id: req.user.id,
    });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
};
