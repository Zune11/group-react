function Navbar({ activePage, setActivePage }) {
  const links = [
    ["home", "Home"],
    ["login", "Activity 1"],
    ["grades", "Activity 2"],
    ["password", "Activity 3"],
    ["electricity", "Activity 4"],
    ["attendance", "Activity 5"],
  ];

  return (
    <header className="navbar">
      <div className="brand">
        <span>R</span>
        <h1>React Activity Portal</h1>
      </div>

      <nav>
        {links.map(([page, label]) => (
          <button
            className={activePage === page ? "active" : ""}
            key={page}
            onClick={() => setActivePage(page)}
            type="button"
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
export default Navbar;
