function Login() {
  return (
    <div className="login">
      <h2>Login Authentication</h2>
      <h4>Activity # 1</h4>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;