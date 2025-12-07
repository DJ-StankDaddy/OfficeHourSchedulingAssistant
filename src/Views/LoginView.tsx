import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Mail,
  Lock
} from "lucide-react";
import { UserType } from "../Models/types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


interface LoginViewProps {
  onLogin: (email: string, password: string, userType: UserType) => Promise<void>;
  isLoading: boolean;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLogin, isLoading }) => {
  const [userType, setUserType] = useState<UserType>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (): Promise<void> => {
    await onLogin(email, password, userType);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 p-4"
      style={{
        background: "linear-gradient(135deg, #eff6ff, #eef2ff, #f3e8ff)",
      }}
    >
      <div className="w-100" style={{ maxWidth: "450px" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <div
            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "#4f46e5",
            }}
          >
            <GraduationCap className="text-white" size={32} />
          </div>
          <h1 className="fw-bold text-dark fs-3">Office Hours Portal</h1>
          <p className="text-muted">Sign in to manage or book office hours</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-4 shadow p-4 p-md-5">
          {/* User Type Switch */}
          <div className="row g-2 mb-4">
            <div className="col-6">
              <button
                className={`w-100 p-3 border rounded text-center ${
                  userType === "student"
                    ? "border-primary bg-primary bg-opacity-10 text-primary"
                    : "border-secondary text-secondary bg-light"
                }`}
                onClick={() => setUserType("student")}
              >
                <BookOpen size={28} className="mb-2" />
                <div className="fw-semibold">Student</div>
              </button>
            </div>

            <div className="col-6">
              <button
                className={`w-100 p-3 border rounded text-center ${
                  userType === "professor"
                    ? "border-primary bg-primary bg-opacity-10 text-primary"
                    : "border-secondary text-secondary bg-light"
                }`}
                onClick={() => setUserType("professor")}
              >
                <GraduationCap size={28} className="mb-2" />
                <div className="fw-semibold">Professor</div>
              </button>
            </div>
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <div className="position-relative">
              <Mail
                size={18}
                className="position-absolute"
                style={{ top: "50%", left: "12px", transform: "translateY(-50%)", color: "#9ca3af" }}
              />
              <input
                type="email"
                className="form-control ps-5 py-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={`${userType}@university.edu`}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <div className="position-relative">
              <Lock
                size={18}
                className="position-absolute"
                style={{ top: "50%", left: "12px", transform: "translateY(-50%)", color: "#9ca3af" }}
              />
              <input
                type="password"
                className="form-control ps-5 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            className="btn btn-primary w-100 py-2 fw-semibold"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Signing in..." : `Sign In as ${userType === "student" ? "Student" : "Professor"}`}
          </button>
        </div>
      </div>
    </div>
  );
};
