import "./Side-bar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const SideBar = ({ isMenuClicked }) => {
  return (
    <div>
      <div className="flex flex-col fixed w-auto z-12 top-21.5 bottom-0 overflow-hidden ">
        <NavLink
          className="w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3 hover:bg-[#e6eded] active:bg-[#a9acac]"
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
          <span className={isMenuClicked ? "opacity-0" : ""}>Notes</span>
        </NavLink>
        <NavLink
          to="/reminders"
          className="w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3 hover:bg-[#e6eded] active:bg-[#a9acac]"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "bold",
                  backgroundColor: "rgba(255, 255, 0, 0.516)",
                }
              : undefined
          }>
          <FontAwesomeIcon icon={["fas", "alarm-clock"]} />
          <span className={isMenuClicked ? "opacity-0" : ""}>Reminders</span>
        </NavLink>
        <div className="w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3 hover:bg-[#e6eded] active:bg-[#a9acac]">
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span className={isMenuClicked ? "opacity-0" : ""}>Edit labels</span>
        </div>
        <NavLink
          className="w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3 hover:bg-[#e6eded] active:bg-[#a9acac]"
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
          <span className={isMenuClicked ? "opacity-0" : ""}>Archive</span>
        </NavLink>
        <NavLink
          className="w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3 hover:bg-[#e6eded] active:bg-[#a9acac]"
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
          <span className={isMenuClicked ? "opacity-0" : ""}>Bin</span>
        </NavLink>
        <a
          href="#"
          className={
            !isMenuClicked
              ? "fixed bottom-7.5 left-4 font-normal text-sm text-[#777] "
              : "opacity-0"
          }>
          Open-source licence
        </a>
      </div>
    </div>
  );
};

export default SideBar;
