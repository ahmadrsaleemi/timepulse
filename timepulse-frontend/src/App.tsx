import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardEmployee from "./pages/DashboardEmployee";
import Punchtime from "./pages/Punchtime";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
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

        <Route path="/punchtime" element={<Punchtime />} />
      </Routes>
    </BrowserRouter>
  );
}
