import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    // Not logged in → send to login page
    return <Navigate to="/auth" />;
  }
  return children;
}
