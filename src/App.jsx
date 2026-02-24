import { Route, Routes } from "react-router-dom";

// Auth
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

// Public pages
import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

// Admin pages — create these files inside src/Admin/
import AdminDashboard from "./pages/Admin/dashboard";

// Manager pages — create these files inside src/Manager/
import ManagerDashboard from "./pages/Manager/dashboard";
import ManagerReview from "./pages/Manager/review";
import ManagerHistory from "./pages/Manager/history";

// Staff pages — create these files inside src/Staff/
import StaffDashboard from "./pages/Staff/dashboard";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/*PUBLIC ROUTES */}
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* ADMIN ROUTES*/}
        <Route element={<ProtectedRoute allowedRole="ADMIN" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>

        {/* MANAGER ROUTES */}
        <Route element={<ProtectedRoute allowedRole="MANAGER" />}>
          <Route path="/manager/dashboard" element={<ManagerDashboard />} />
          <Route path="/manager/review" element={<ManagerReview />} />
          <Route path="/manager/history" element={<ManagerHistory />} />
        </Route>

        {/* STAFF ROUTES */}
        <Route element={<ProtectedRoute allowedRole="STAFF" />}>
          <Route path="/staff/dashboard" element={<StaffDashboard />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
