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
    description:
      "Validate a username and password against sample credentials and manage login/logout state.",
  },
  {
    id: "grades",
    number: 2,
    title: "Student Grade Evaluation",
    description:
      "Enter a student's score and get an automatic remark based on grade ranges.",
  },
  {
    id: "password",
    number: 3,
    title: "Password Strength Checker",
    description:
      "Check password length and receive live feedback on how strong it is.",
  },
  {
    id: "electricity",
    number: 4,
    title: "Electricity Bill Calculator",
    description:
      "Calculate a customer's electricity bill based on kWh consumption and tiered rates.",
  },
  {
    id: "attendance",
    number: 5,
    title: "Employee Attendance Checker",
    description:
      "Check an employee's time-in and determine whether they are on time, late, or very late.",
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
            <p>{activity.description}</p>
            <button type="button" onClick={() => setActivePage(activity.id)}>
              Open Activity
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}

function ElectricityBill() {
  return (
    <main className="activity-page">
      <h1>Electricity Bill Calculator</h1>
      <p>This activity is ready to be connected to its calculator form.</p>
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
    electricity: <ElectricityBill />,
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
