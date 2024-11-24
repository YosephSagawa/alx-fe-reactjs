import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = () => {
    return localStorage.getItem("authToken") !== null;
  };

  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
