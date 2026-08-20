import { useState } from "react";
import "./AttendanceChecker.css";

function AttendanceChecker() {
  const [employeeName, setEmployeeName] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const getMinutesFromTime = (timeValue) => {
    const [hours, minutes] = timeValue.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const checkAttendance = () => {
    setError("");
    setResult(null);

    // Input validation
    if (employeeName.trim() === "" || timeIn === "") {
      setError("Please enter employee name and time in.");
      return;
    }

    const time = getMinutesFromTime(timeIn);

    if (Number.isNaN(time)) {
      setError("Please enter a valid time.");
      return;
    }

    let status = "";
    let message = "";

    // Attendance conditions
    if (time <= 8 * 60) {
      status = "On Time";
      message = "Status: On Time - Good job!";
    } else if (time <= 9 * 60) {
      status = "Late";
      message = "Status: Late - Please be on time tomorrow.";
    } else {
      status = "Very Late";
      message = "Status: Very Late - Report to your supervisor.";
    }

    setResult({
      employeeName: employeeName,
      timeIn: timeIn,
      status: status,
      message: message,
    });
  };

  const resetForm = () => {
    setEmployeeName("");
    setTimeIn("");
    setResult(null);
    setError("");
  };

  return (
    <div className="attendance-page">
      <div className="attendance-card">
        <div className="attendance-header">
          <h2>Employee Attendance Checker</h2>
          <p>Activity 5</p>
        </div>

        <div className="attendance-body">
          <div className="form-group">
            <label>Employee Name</label>

            <input
              type="text"
              placeholder="Enter employee name"
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Time In</label>

            <input
              type="time"
              value={timeIn}
              onChange={(e) => setTimeIn(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button
              className="check-btn"
              onClick={checkAttendance}
            >
              Check Attendance
            </button>

            <button
              className="reset-btn"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>

          {/* Error message */}
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          {/* Conditional result */}
          {result && (
            <div className="result-panel">
              <h3>Attendance Result</h3>

              <p>
                <strong>Employee Name:</strong>{" "}
                {result.employeeName}
              </p>

              <p>
                <strong>Time In:</strong>{" "}
                {result.timeIn}
              </p>

              <p>
                <strong>Attendance Status:</strong>{" "}
                {result.status}
              </p>

              <p className="status-message">
                {result.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AttendanceChecker;
