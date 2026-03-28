import "./Side-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const SideBar = ({ isMenuClicked }) => {
  return (
    <div>
      <div className="side-bar-elements-container">
        <NavLink
          className="side-bar-element "
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgba(255, 255, 0, 0.516)",
                }
              : undefined
          }
          to="/">
          <FontAwesomeIcon icon={["fas", "lightbulb"]} />
          <span className={isMenuClicked ? "collapse-elements" : ""}>
            Notes
          </span>
        </NavLink>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "alarm-clock"]} />
          <span className={isMenuClicked ? "collapse-elements" : ""}>
            Reminders
          </span>
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span className={isMenuClicked ? "collapse-elements" : ""}>
            Edit labels
          </span>
        </div>
        <NavLink
          className="side-bar-element"
          to="/archive"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgba(255, 255, 0, 0.516)",
                }
              : undefined
          }>
          <FontAwesomeIcon icon={["fas", "box-archive"]} />
          <span className={isMenuClicked ? "collapse-elements" : ""}>
            Archive
          </span>
        </NavLink>
        <NavLink
          className="side-bar-element"
          to="/bin"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgba(255, 255, 0, 0.516)",
                }
              : undefined
          }>
          <FontAwesomeIcon icon={["fas", "trash-can"]} />
          <span className={isMenuClicked ? "collapse-elements" : ""}>Bin</span>
        </NavLink>
        <a
          href="#"
          className={!isMenuClicked ? "licence" : "collapse-elements"}>
          Open-source licence
        </a>
      </div>
    </div>
  );
};

export default SideBar;
