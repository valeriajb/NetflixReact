import React, { useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import "./NavBar.scss";
function NavBar() {

  const [isScroll, setIsScroll] = useState(false);
  window.onscroll = () =>{
    console.log(window.pageYOffset)
    setIsScroll(window.pageYOffset != 0 ? true : false);
  };

  

  return (
    <div className={"navBar-container " + (isScroll && "isScroll")}>
      <div className="left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
        <ul>
          <li>HomePage</li>
          <li>Series</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
        </ul>
      </div>

      <div className="rigth">
        <SearchSharpIcon />
        <span>Kids</span>
        <NotificationsSharpIcon />
        <img
          src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="navBar-container-choose">
          <ArrowDropDownSharpIcon />
          <div className={"container-section " +  (isScroll && "isScroll")}>
            <span>Settings</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
