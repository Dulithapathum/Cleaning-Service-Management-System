import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Welcome to Cleaning Service
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Book your trusted cleaner online. Professional, reliable, and
            affordable cleaning for homes and offices.
          </p>
          <Link
            to="/booking"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow-md transition"
          >
            Book Now
          </Link>
        </div>
        <div>
          <img
            src="./01.webp"
            alt="Cleaning Service"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
