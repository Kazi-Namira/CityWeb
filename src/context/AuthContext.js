import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate checking for existing session on app load
  useEffect(() => {
    // In a real app, this would check localStorage or make an API call
    // For demo purposes, we'll just set loading to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Login function
  const login = (userData) => {
    const user =
      typeof userData === "string"
        ? { name: userData, email: `${userData}@cityweb.com` }
        : userData;

    setUser(user);

    // In a real app, you would:
    // 1. Make API call to authenticate
    // 2. Store JWT token in localStorage
    // 3. Set user data
    console.log("User logged in:", user);
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // In a real app, you would:
    // 1. Clear localStorage
    // 2. Make API call to invalidate session
    // 3. Redirect to login
    console.log("User logged out");
  };

  // Register function (for future use)
  const register = async (userData) => {
    // In a real app, make API call to register user
    const newUser = {
      name: userData.name,
      email: userData.email,
      id: Date.now(), // Mock ID
      joinedDate: new Date().toISOString(),
    };

    setUser(newUser);
    console.log("User registered:", newUser);
    return newUser;
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
          <div className="text-white text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-xl font-semibold">Loading CityWeb...</p>
          </div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

// Custom hook for protected actions
export function useRequireAuth() {
  const { user, loading } = useAuth();

  return {
    user,
    loading,
    isAuthenticated: !!user,
    requireAuth: (callback) => {
      if (!user) {
        console.warn("Action requires authentication");
        return false;
      }
      callback();
      return true;
    },
  };
}
