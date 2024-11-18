import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginProtectRoute({children}) {

  const { user } = useAuth()
  if (user) {
    return <Navigate to="/admin" />;
  } else {
    return children;
  }
}
