import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginchecker = (event) => {
    event.preventDefault();

    if (username.trim() === "" && password.trim() === "") {
      setMessage("Please enter username and password.");
      return;
    }

    if (username === "admin" && password === "12345") {
      setIsLoggedIn(true);
      setMessage("Login successful!");
      return;
    }

    setMessage("Invalid username or password.");
  };

  const logout = () => {
    setUsername("");
    setPassword("");
    setMessage("");
    setIsLoggedIn(false);
  };

  return (
    <div className="login">
      <h2>Login Authentication</h2>
      <h4>Activity # 1</h4>

      {isLoggedIn ? (
        <>
          <p>Welcome, {username}!</p>
          {message && <p>{message}</p>}
          <button type="button" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <form onSubmit={loginchecker}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <label>
            username: admin   password: 12345
          </label>
          {message && <p>{message}</p>}
        </>
      )}
    </div>
  );
}

export default Login;
