import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noteIcon from "../../assets/note-icon.png";
import profileImg from "../../assets/profile-pic.jpg";

export default function NavBar({ searchQuery, onSearch, setIsMenuClicked }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };
    addEventListener("scroll", handleScroll);
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`p-[6px_30px] w-full  m-[0_auto]  fixed top-0 z-10 shadow-[2px_2px_4px_#5a595966] ${scrolled ? "bg-blue-300" : "bg-blue-950"} `}>
      <nav className={"p-[0_10px] flex justify-between items-center  gap-12 "}>
        <div className="flex items-center pr-12 ">
          {/*----------MENU OPTION -------- */}
          <span title="menu">
            <FontAwesomeIcon
              icon={["fas", "bars"]}
              className="p-3 cursor-pointer"
              onClick={() => {
                setIsMenuClicked((prev) => !prev);
              }}
            />
          </span>
          <img src={noteIcon} alt="" className="size-10 pl-1.5" />
          <span className="text-[#1f1f1f] text-xs leading ">Keep</span>
        </div>
        {/*search icon*/}
        <div className="flex items-center justify-between gap-3 p-1.5 w-full">
          <label className="flex bg-blue-200 items-center w-[70%] p-2 rounded-md">
            {/*    inset 1px 1px 0 rgba(8, 164, 71, 0.1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.07); */}
            <span title="search">
              <FontAwesomeIcon
                icon={["fas", "magnifying-glass"]}
                className="p-3 cursor-pointer hover:bg-[#8888884d] hover:rounded-full active:bg-[#88888899] search-icon"
              />
            </span>
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="h-8 min-w-[70%] outline-none border-[solid_transparent] bg-transparent rounded-[5px] p-[18px_6px] cursor-text m-0"
            />
          </label>
          <div className="w-[20%] flex items-center justify-end gap-4 opacity-70">
            <FontAwesomeIcon
              icon={["fas", "arrows-rotate"]}
              className="p-3 cursor-pointer hover:bg-[#8888884d] hover:rounded-full active:bg-[#88888899]"
            />
            <FontAwesomeIcon
              icon={["fas", "list"]}
              className="p-3 cursor-pointer hover:bg-[#8888884d] hover:rounded-full active:bg-[#88888899]"
            />
            <FontAwesomeIcon
              icon={["fas", "gear"]}
              className="p-3 cursor-pointer hover:bg-[#8888884d] hover:rounded-full active:bg-[#88888899]"
            />
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <FontAwesomeIcon
            icon={["fas", "table-cells-large"]}
            className="p-3 cursor-pointer hover:bg-[#8888884d] hover:rounded-full active:bg-[#88888899]"
          />
          <img
            src={profileImg}
            alt="profile-picture"
            className="size-10.5 rounded-full"
          />
        </div>
      </nav>
    </div>
  );
}
