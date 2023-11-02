import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const getActiveStyle = ({ isActive }) => ({
    color: isActive && "white",
  });
  return (
  
      <div className="navbar-container">
        <div onClick={() => navigate("/")}>
          <h3 className="logo-name">Fitness Trackerz</h3>
        </div>
        <nav className="links-container">
          <NavLink className="navbar-items" style={getActiveStyle} to="/">
            Dashboard
          </NavLink>
          <NavLink className="navbar-items" style={getActiveStyle} to="/exercises">
            Exercises
          </NavLink>
          <NavLink
            className="navbar-items"
            style={getActiveStyle}
            to="/food"
          >
            Food
          </NavLink>
          <NavLink
            className="navbar-items"
            style={getActiveStyle}
            to="/goal-tracker"
          >
            Goals
          </NavLink>
          <NavLink
            className="navbar-items"
            style={getActiveStyle}
            to="https://github.com/zabihhaqqani/Fitness-Tracker"
          >
            Github
          </NavLink>
        </nav>
      </div>
  
  );
};

export default NavBar;
