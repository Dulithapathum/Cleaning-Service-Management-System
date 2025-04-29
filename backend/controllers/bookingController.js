import Booking from "../models/Booking.js";

// Get Booking
export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user_id: req.user.id }).populate(
      "service_id"
    );
    res.json(bookings);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching bookings", error });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate(
      "service_id"
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    if (booking.user_id.toString() !== req.user.id) {
      return res.status(403).json({ message: "Access denied" });
    }

    res.json(booking);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

// Add Booking
export const addBooking = async (req, res) => {
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

// Update Booking
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error updating booking", error });
  }
};

// Delete Booking Function
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking", error });
  }
};
