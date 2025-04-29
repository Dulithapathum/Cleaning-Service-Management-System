import { useState, useEffect } from "react";
import axios from "axios";

const BookingForm = () => {
  const [form, setForm] = useState({
    customer_name: "",
    address: "",
    date_time: "",
    service_id: "",
  });

  const [services, setServices] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/services");
        setServices(res.data);
      } catch (err) {
        console.error("Failed to fetch services", err);
        setErrorMessage("Failed to load services.");
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post("http://localhost:5000/api/bookings", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessage("Booking successful!");
      setForm({
        customer_name: "",
        address: "",
        date_time: "",
        service_id: "",
      });
    } catch (err) {
      console.error("Booking failed", err);
      setErrorMessage("Booking failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-6 pt-20">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center text-blue-500 mb-6">
          Book a Service
        </h2>

        {/* Message Area */}
        {successMessage && (
          <div className="bg-blue-500 text-white text-center p-2 rounded mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-500 text-white text-center p-2 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.customer_name}
              onChange={(e) =>
                setForm({ ...form, customer_name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Address</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Date & Time</label>
            <input
              type="datetime-local"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.date_time}
              onChange={(e) => setForm({ ...form, date_time: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Service Type</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.service_id}
              onChange={(e) => setForm({ ...form, service_id: e.target.value })}
              required
            >
              <option value="" disabled>
                Select Service
              </option>
              {services.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
