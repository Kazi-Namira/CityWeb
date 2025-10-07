import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function WelcomeScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!isLogin) {
        // Sign up validation
        if (formData.password !== formData.confirmPassword) {
          setError("Passwords don't match");
          setLoading(false);
          return;
        }
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters");
          setLoading(false);
          return;
        }
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, accept any email/password
      const userName = formData.name || formData.email.split("@")[0];
      login(userName);
      navigate("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl w-full max-w-md p-8 transform transition-all duration-300 hover:scale-[1.02]">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 512 512"
              fill="#ffffff"
            >
              <path
                fill="#ffffff"
                d="M256 23c-71.69 0-130 58.31-130 130s58.31 130 130 130s130-58.31 130-130S327.69 23 256 23zm-8.33 31.127l-11.774 35.246l52.145-5.463l-5.186-17.457l14.624 4.049v19.367l22.843 1.49l-4.468-17.38l12.007-6.954C352.41 87.553 368 118.417 368 153c0 16.668-3.625 32.471-10.125 46.672l-26.13 4.422v31.478a112.138 112.138 0 0 1-16.099 12.29l-11.216-17.448l-21.852 5.96l6.14 23.786A112.353 112.353 0 0 1 256 265c-31.013 0-59.037-12.535-79.297-32.826l19.96-2.752l13.41-26.322l-42.712-21.354l30.295-25.826l-26.32-21.85l-26.893 8.963c3.112-35.448 22.653-66.103 50.994-84.318l5.696 45.556l46.537-50.144zm38.88 64.217l-36.17 23.176l31.606 28.093l22.827-6.672l-2.108 27.391l41.79-10.535l-15.804-35.818l-25.283.351l22.475-19.314l-39.332-6.672zm-37.573 40.383l-19.315 8.427l13.695 10.184l5.62-18.611zm-45.362 3.154l-13.408 15.89l37.147 26.108l-23.739-41.998zm59.76 8.785l-13.695 25.637l33.01 22.474l-11.59-16.506l14.398-17.207l-22.123-14.398zM60.17 198.061c-8.818-.137-17.843 11.093-17.895 39.882c-.078 44.153-4.356 56.616 16.077 106.551C73.335 381.112 80.054 409.257 128 432c5.68 20.022 3.413 24.73-.44 41.84c-3.596 15.974 33.423 18.91 60.534 5.453c29.091-15.868 26.65-59.557 21.453-89.184c-6.044-34.454-25.06-41.615-41.543-56.332c-17.115-24.475-21.098-68.813-48.856-86.699c-5.797-3.735-35.37-7.527 5.262 93.942c-53.571-13.268-43.813-74.773-47.687-120.31c-1.154-13.561-8.773-22.53-16.553-22.65zm391.66 0c-7.78.12-15.399 9.088-16.553 22.65c-3.874 45.536 5.884 107.041-47.687 120.309c40.633-101.47 11.059-97.677 5.262-93.942c-27.758 17.886-31.74 62.224-48.856 86.7c-16.482 14.716-35.5 21.877-41.543 56.331c-5.197 29.627-7.638 73.316 21.453 89.184c27.111 13.456 64.13 10.521 60.533-5.453c-3.852-17.11-6.119-21.818-.439-41.84c47.946-22.743 54.665-50.888 69.648-87.506c20.433-49.935 16.155-62.398 16.077-106.55c-.052-28.79-9.077-40.02-17.895-39.883z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">CityWeb</h1>
          <p className="text-gray-600 text-sm">
            Track your impact. Earn rewards. Save the planet.
          </p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex mb-6 bg-gray-100 rounded-lg p-1">
          <button
            type="button"
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              isLogin
                ? "bg-white text-green-600 shadow-sm"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
              !isLogin
                ? "bg-white text-green-600 shadow-sm"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required={!isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required={!isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Confirm your password"
              />
            </div>
          )}

          {error && (
            <div className="text-red-500 text-sm text-center bg-red-50 py-2 px-4 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:from-green-600 hover:to-blue-600 focus:ring-4 focus:ring-green-200 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02]"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </div>
            ) : isLogin ? (
              "Sign In"
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-600 hover:text-green-700 font-medium"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}
