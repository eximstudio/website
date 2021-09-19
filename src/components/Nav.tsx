import { NavLink } from "react-router-dom";
import { shake, toggleTheme } from "./utils";

import "../css/nav.css";

export default function Nav(): JSX.Element {
  return (
    <>
      <nav>
        <div className="logo-container">
          <span className="header-logo">Exim Studio</span>
        </div>
        <div className="links">
          <NavLink
            onClick={(e) => {
              shake(e.target as HTMLElement);
              toggleTheme();
            }}
            to="/"
            className="nav-button"
            activeClassName="active shake"
            exact
          >
            Home
          </NavLink>
          <NavLink
            onClick={(e) => shake(e.target as HTMLElement)}
            to="/contact"
            activeClassName="active shake"
            className="nav-button"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={(e) => shake(e.target as HTMLElement)}
            to="/about"
            activeClassName="active shake"
            className="nav-button"
          >
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
}
