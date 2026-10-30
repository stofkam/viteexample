import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// Принимаем children (то, что внутри)
const RequireAuth = ({ children }) => {
  const user = false;
  const location = useLocation();

  if (!user) {
    // Если нет юзера, редиректим на логин.
    // state={{ from: location }} нужен, чтобы после логина вернуть юзера туда, куда он хотел попасть.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
