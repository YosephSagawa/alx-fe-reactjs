import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const useAuth = () => {
    const isAuthenticated = () => {
      return localStorage.getItem("authToken") !== null;
    };
  };
  return useAuth() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
