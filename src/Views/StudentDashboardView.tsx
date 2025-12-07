import {
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  MapPin,
  Users,
  Search
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { User, OfficeHour, Appointment } from "../Models/types";

interface StudentDashboardViewProps {
  user: User;
  officeHours: OfficeHour[];
  appointments: Appointment[];
  onBookAppointment: (id: number) => void;
  onCancelAppointment: (id: number) => void;
  onLogout: () => void;
}

const StudentDashboardView: React.FC<StudentDashboardViewProps> = ({
  user,
  officeHours,
  appointments,
  onBookAppointment,
  onCancelAppointment,
  onLogout
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHours = officeHours.filter((hour) =>
    hour.professorName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100 bg-light">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container py-4 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <GraduationCap className="text-primary me-3" size={32} />
            <div>
              <h1 className="h4 fw-bold text-dark mb-0">Student Portal</h1>
              <p className="text-muted small mb-0">Welcome, {user.name}</p>
            </div>
          </div>

          <button className="btn btn-link text-secondary" onClick={onLogout}>
            Logout
          </button>
        </div>
      </header>

      <div className="container py-5">
        {/* My Appointments */}
        <div className="mb-5">
          <h2 className="h4 fw-bold text-dark mb-4">My Appointments</h2>

          <div className="row g-4">
            {appointments
              .filter((apt) => apt.status !== "cancelled")
              .map((apt) => (
                <div className="col-12 col-md-6 col-lg-4" key={apt.id}>
                  <div
                    className="bg-white rounded shadow-sm p-4"
                    style={{ borderLeft: "4px solid #22c55e" }}
                  >
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="h6 fw-bold mb-0">{apt.professorName}</h3>
                      <span className="badge bg-success bg-opacity-25 text-success text-uppercase">
                        {apt.status}
                      </span>
                    </div>

                    <div className="text-muted small mb-3">
                      <div className="d-flex align-items-center mb-1">
                        <Calendar size={16} className="me-2 text-primary" />
                        {apt.date}
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <Clock size={16} className="me-2 text-primary" />
                        {apt.time}
                      </div>
                      <div className="d-flex align-items-center">
                        <MapPin size={16} className="me-2 text-primary" />
                        {apt.location}
                      </div>
                    </div>

                    <button
                      className="btn btn-outline-danger w-100"
                      onClick={() => onCancelAppointment(apt.id)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Office Hours */}
        <div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 fw-bold text-dark mb-0">Available Office Hours</h2>

            {/* Search */}
            <div className="position-relative">
              <Search
                size={18}
                className="position-absolute"
                style={{ top: "50%", left: "10px", transform: "translateY(-50%)", color: "#9ca3af" }}
              />
              <input
                type="text"
                className="form-control ps-5"
                placeholder="Search professors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Cards */}
          <div className="row g-4">
            {filteredHours.map((hour) => (
              <div className="col-12 col-md-6 col-lg-4" key={hour.id}>
                <div className="card shadow-sm h-100">
                  {/* Gradient header */}
                  <div
                    className="text-white p-3 rounded-top"
                    style={{
                      background: "linear-gradient(to right, #4f46e5, #2563eb)"
                    }}
                  >
                    <h3 className="h5 fw-bold mb-1">{hour.professorName}</h3>
                    <span className="badge bg-white text-primary">{hour.type}</span>
                  </div>

                  <div className="card-body">
                    <div className="text-muted small mb-3">
                      <div className="d-flex align-items-center mb-1">
                        <Calendar size={16} className="me-2 text-primary" />
                        {hour.day}
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <Clock size={16} className="me-2 text-primary" />
                        {hour.time}
                      </div>
                      <div className="d-flex align-items-center mb-1">
                        <MapPin size={16} className="me-2 text-primary" />
                        {hour.location}
                      </div>
                      <div className="d-flex align-items-center">
                        <Users size={16} className="me-2 text-primary" />
                        {hour.available} slots available
                      </div>
                    </div>

                    <button
                      className="btn btn-primary w-100"
                      onClick={() => onBookAppointment(hour.id)}
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardView;
