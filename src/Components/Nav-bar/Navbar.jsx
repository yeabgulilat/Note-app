import { useState } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noteIcon from "../../assets/note-icon.png";
import profileImg from "../../assets/profile-pic.jpg";

export default function NavBar({ searchQuery, onSearch, setIsMenuClicked }) {
  return (
    <div className="nav-main-container">
      <nav className="nav-container">
        <div className="menu">
          <FontAwesomeIcon
            icon={["fas", "bars"]}
            className="icon"
            onClick={() => {
              setIsMenuClicked((prev) => !prev);
              // console.log("Menu is clicked");
            }}
          />
          <img src={noteIcon} alt="" className="note-icon-img" />
          <span className="keep-text">Keep</span>
        </div>
        <div className="search-bar">
          <label>
            <FontAwesomeIcon
              icon={["fas", "magnifying-glass"]}
              className="icon search-icon"
            />
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="search-input"
            />
          </label>
          <div>
            <FontAwesomeIcon icon={["fas", "arrows-rotate"]} className="icon" />
            <FontAwesomeIcon icon={["fas", "list"]} className="icon" />
            <FontAwesomeIcon icon={["fas", "gear"]} className="icon" />
          </div>
        </div>
        <div className="user-identity">
          <FontAwesomeIcon
            icon={["fas", "table-cells-large"]}
            className="icon"
          />
          <img src={profileImg} alt="profile-picture" className="profile-img" />
        </div>
      </nav>
    </div>
  );
}
