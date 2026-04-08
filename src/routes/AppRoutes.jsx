import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import FAQPage from "../pages/public/FAQPage";

// Admin Pages
import LoginPage from "../pages/admin/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/faq" element={<FAQPage />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />

      </Routes>
    </Router>
  );
}