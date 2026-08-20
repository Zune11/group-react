import { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  let level = "";
  let feedback = "Enter a password to check its strength.";

  if (password.length > 0 && password.length < 6) {
    level = "weak";
    feedback = "Your password is too short. Use at least 6 characters.";
  } else if (password.length < 10 && password.length >= 6) {
    level = "medium";
    feedback = "Medium-strength password. Use 10 or more characters to make it stronger.";
  } else if (password.length >= 10) {
    level = "strong";
    feedback = "Your password has a strong length.";
  }

  return (
    <main className="activity-page">
      <h1>Password Strength Checker</h1>
      <p className="activity-intro">
        Type a password to receive live feedback based on its length.
      </p>

      <div className="password-form">
        <label htmlFor="password">Password</label>
        <div className="password-input-wrapper">
          <input
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            type={isPasswordVisible ? "text" : "password"}
            value={password}
          />
          <button
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            className="password-visibility-button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            type="button"
          >
            {isPasswordVisible ? "Hide" : "Show"}
          </button>
        </div>
        <p className="character-count">Characters: {password.length}</p>
        <p className={`password-feedback ${level}`} aria-live="polite">
          {feedback}
        </p>
      </div>
    </main>
  );
}

export default PasswordChecker;
