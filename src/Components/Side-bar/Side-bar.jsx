import "./Side-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
  return (
    <div className="sidebar-main-container">
      <div className="side-bar-elements-container">
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "lightbulb"]} />
          Notes
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "alarm-clock"]} />
          Reminders
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "pen"]} />
          Edit labels
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "box-archive"]} />
          Archive
        </div>
        <div className="side-bar-element">
          <FontAwesomeIcon icon={["fas", "trash-can"]} />
          Bin
        </div>
        <a href="#" className="licence">
          pen-source licence
        </a>
      </div>
    </div>
  );
};

export default SideBar;
