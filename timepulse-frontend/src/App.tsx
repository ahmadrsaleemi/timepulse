import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardEmployee from "./pages/DashboardEmployee";
import ProtectedRoute from "./components/ProtectedRoute";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute role={0}>
              <DashboardAdmin />
            </ProtectedRoute>
          }
        />

        <Route
          path="/employee"
          element={
            <ProtectedRoute role={10}>
              <DashboardEmployee />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
