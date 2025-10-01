import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // later your backend friend can send this to an API endpoint
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-8">
          Contact Us
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions or want to collaborate? Fill out the form below and
          we’ll get back to you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-lg rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-left font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-left font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-left font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
