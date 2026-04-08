import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

const SideBar = ({ isMenuClicked }) => {
  return (
    <div>
      <div
        className={`flex flex-col fixed  z-12 top-21 bottom-0  ${isMenuClicked ? "w-70 " : " w-15"} `}>
        <NavLink
          className={({
            isActive,
          }) => ` w-full hover:w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3  group
           ${isActive ? "font-bold  bg-[#ffff0084] " : "hover:bg-[#e6eded5b]  active:bg-[#a9acac]  "}`}
          to="/">
          <FontAwesomeIcon icon={["fas", "lightbulb"]} />
          <span
            className={`${isMenuClicked ? "" : "opacity-0"} group-hover:opacity-100 `}>
            Notes
          </span>
        </NavLink>
        <NavLink
          to="/reminders"
          className={({
            isActive,
          }) => ` w-full hover:w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3  group
           ${isActive ? "font-bold bg-[#ffff0084] " : "hover:bg-[#e6eded5b] active:bg-[#a9acac]  "}`}>
          <FontAwesomeIcon icon={["fas", "alarm-clock"]} />
          <span
            className={`${isMenuClicked ? "" : "opacity-0"} group-hover:opacity-100 `}>
            Reminders
          </span>
        </NavLink>

        <NavLink
          to="/editLable"
          className={({
            isActive,
          }) => ` w-full hover:w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3  group
           ${isActive ? "font-bold bg-[#ffff0084] " : "hover:bg-[#e6eded5b] active:bg-[#a9acac]  "}`}>
          <FontAwesomeIcon icon={["fas", "pen"]} />
          <span
            className={`${isMenuClicked ? "" : "opacity-0"} group-hover:opacity-100 `}>
            editLable
          </span>
        </NavLink>

        <NavLink
          to="/archive"
          className={({
            isActive,
          }) => ` w-full hover:w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3  group
           ${isActive ? "font-bold bg-[#ffff0084] " : "hover:bg-[#e6eded5b] hover active:bg-[#a9acac]  "}`}>
          <FontAwesomeIcon icon={["fas", "box-archive"]} />
          <span
            className={`${isMenuClicked ? "" : "opacity-0"} group-hover:opacity-100 `}>
            Archive
          </span>
        </NavLink>
        <NavLink
          to="/bin"
          className={({
            isActive,
          }) => ` w-full hover:w-70 p-4.5 rounded-r-4xl cursor-pointer flex gap-3  group
           ${isActive ? "font-bold bg-[#ffff0084] " : "hover:bg-[#e6eded5b] active:bg-[#a9acac]  "}`}>
          <FontAwesomeIcon icon={["fas", "trash-can"]} />
          <span
            className={`${isMenuClicked ? "" : "opacity-0"} group-hover:opacity-100 `}>
            Bin
          </span>
        </NavLink>
        <a
          href="#"
          className={
            isMenuClicked
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
