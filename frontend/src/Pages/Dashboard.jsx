import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/bookings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch bookings.");
        setLoading(false);
      });
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-booking/${id}`);
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings((prev) => prev.filter((b) => b._id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking.");
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto pt-30">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto pt-30">
        <p className="bg-red-500 text-white text-center p-2 rounded mb-4">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pt-30">
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">You have no bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700">
                  Customer Name
                </th>
                <th className="px-4 py-2 text-left text-gray-700">Service</th>
                <th className="px-4 py-2 text-left text-gray-700">Date</th>
                <th className="px-4 py-2 text-left text-gray-700">Address</th>
                <th className="px-4 py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b._id}
                  className="border-t border-gray-200 hover:bg-gray-50"
                >
                  <td className="px-4 py-2 text-gray-800">{b.customer_name}</td>
                  <td className="px-4 py-2 text-gray-800">
                    {b.service_id.name}
                  </td>
                  <td className="px-4 py-2 text-gray-800">
                    {new Date(b.date_time).toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-gray-800">{b.address}</td>
                  <td className="px-4 py-2 space-x-2">
                    <button
                      onClick={() => handleEdit(b._id)}
                      className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded hover:bg-blue-600 hover:text-white"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-600 hover:text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
