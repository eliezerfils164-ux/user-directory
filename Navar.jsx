import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "#1a1a2e",
      padding: "15px 20px",
      display: "flex",
      gap: "20px"
    }}>
      <NavLink
        to="/"
        end
        style={({ isActive }) => ({
          color: isActive ? "#e94560" : "white",
          textDecoration: "none",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        🏠 Home
      </NavLink>
    </nav>
  );
}

export default Navbar;
