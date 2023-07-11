import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoutes from "./components/ProtectedRoutes";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import DoctorProfile from "./pages/doctor/DoctorProfile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointment";
import ApplyPatient from "./pages/ApplyPatient";
import Patients from "./pages/admin/Patients";
import PatientProfile from "./pages/patient/PatientProfile";
import PatientAppointment from "./pages/patient/PatientAppointment";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        {loading ? (
          <Spinner />
        ) : (
          <Routes>
            {/* Private Routes  */}
            <Route
              path="/apply-doctor"
              element={
                <ProtectedRoutes>
                  <ApplyDoctor />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/apply-patient"
              element={
                <ProtectedRoutes>
                  <ApplyPatient />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoutes>
                  <Users />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/doctors"
              element={
                <ProtectedRoutes>
                  <Doctors />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/admin/patients"
              element={
                <ProtectedRoutes>
                  <Patients />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/doctor/profile/:id"
              element={
                <ProtectedRoutes>
                  <DoctorProfile />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/patient/profile/:id"
              element={
                <ProtectedRoutes>
                  <PatientProfile />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/doctor/book-appointment/:doctorId"
              element={
                <ProtectedRoutes>
                  <BookingPage />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/notification"
              element={
                <ProtectedRoutes>
                  <NotificationPage />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/appointments"
              element={
                <ProtectedRoutes>
                  <Appointments />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/doctor-appointments"
              element={
                <ProtectedRoutes>
                  <DoctorAppointments />
                </ProtectedRoutes>
              }
            />

            <Route
              path="/patient-appointments"
              element={
                <ProtectedRoutes>
                  <PatientAppointment />
                </ProtectedRoutes>
              }
            />

            {/* Public Route  */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <HomePage />
                </ProtectedRoutes>
              }
            />

            {/* <Route path="/" element={<HomePagePublic />} /> */}
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
