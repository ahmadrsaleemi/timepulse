import type { JSX } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
  role,
}: {
  children: JSX.Element;
  role?: number;
}) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role !== undefined && user.type !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}
