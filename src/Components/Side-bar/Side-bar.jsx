import "./Side-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ isMenuClicked }) => {
  return (
    <div className="sidebar-main-container ">
      <div className="side-bar-elements-container">
        <div className="side-bar-element ">
          <FontAwesomeIcon icon={["fas", "lightbulb"]} />
          <span className={isMenuClicked && "collapse-elements"}>Notes</span>
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "alarm-clock"]} />
          <span className={isMenuClicked && "collapse-elements"}>
            Reminders
          </span>
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span className={isMenuClicked && "collapse-elements"}>
            Edit labels
          </span>
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "box-archive"]} />
          <span className={isMenuClicked && "collapse-elements"}>Archive</span>
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "trash-can"]} />
          <span className={isMenuClicked && "collapse-elements"}>Bin</span>
        </div>
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
