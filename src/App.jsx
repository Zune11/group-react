import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import GradeEvaluation from "./pages/GradeEvaluation";
import PasswordChecker from "./pages/PasswordChecker";
import AttendanceChecker from "./pages/AttendanceChecker";

const activities = [
  {
    id: "login",
    number: 1,
    title: "Login Authentication",
  },
  {
    id: "grades",
    number: 2,
    title: "Student Grade Evaluation",
  },
  {
    id: "password",
    number: 3,
    title: "Password Strength Checker",
  },
  {
    id: "attendance",
    number: 5,
    title: "Employee Attendance Checker",
  },
];

function Home({ setActivePage }) {
  return (
    <main className="home">
      <section className="hero">
        <h1>React Activity Portal</h1>
        <p>
          Five interactive React activities demonstrating state, events,
          conditional logic, validation, and calculations.
        </p>
      </section>

      <section className="activity-grid" aria-label="React activities">
        {activities.map((activity) => (
          <article className="activity-card" key={activity.id}>
            <span className="activity-number">{activity.number}</span>
            <h2>{activity.title}</h2>
            <button type="button" onClick={() => setActivePage(activity.id)}>
              Open Activity
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

function App() {
  const [activePage, setActivePage] = useState("home");

  const pages = {
    home: <Home setActivePage={setActivePage} />,
    login: <Login />,
    grades: <GradeEvaluation />,
    password: <PasswordChecker />,
    attendance: <AttendanceChecker />,
  };

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {pages[activePage]}
    </>
  );
}

export default App;
