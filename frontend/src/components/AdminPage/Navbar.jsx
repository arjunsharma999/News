import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
//   console.log(showMenu);

  return (
    <>
      <div className="position-relative">
      <nav className="nav position-fixed fixed-top">
        <i className="uil uil-bars navOpenBtn"></i>
        <a href="#" className="logo">
          {" "}
          <img src="/images/logo.jpeg" width="15px" alt="" />
        </a>
        <ul className="nav-links">
          <i className="uil uil-times navCloseBtn"></i>
          <Link to={"/LatestNews"}>
            <a href="#">ख़बरों की ख़बर</a>
          </Link>

          <Link to={"/Home"}>
            <a href="#">$$$</a>
          </Link>
          <li>
            <a href="#">मंथन</a>
          </li>
          <Link to={"/News"}>
            <a href="#">खबरे</a>
          </Link>
          <li>
            <a href="#">साहित्य</a>
          </li>
          <li>
            <a href="#">संपदकी</a>
          </li>
          <li>
            <a href="#">पहाड़ रैबार</a>
          </li>
          <Link to={"/Science&Tech"}>
            <a href="#">विज्ञान और तकनीक</a>
          </Link>
          <li>
            <a href="#">वीडियो</a>
          </li>
          <Link to={"/Health"}>
            <a href="#">स्वस्थ्य</a>
          </Link>
          <li>
            <a href="#">शहरनामा</a>
          </li>
          <li>
            <a href="#">हमारे बारे में</a>
          </li>
          <Link to={"/Contact-us"}>
            <a href="#">संपर्क</a>
          </Link>
        </ul>
        <i className="uil uil-search search-icon" id="searchIcon"></i>
        <div className="search-box">
          <i className="uil uil-search search-icon"></i>
          <input type="text" placeholder="Search here..." />
        </div>
        <div
          className="d-block d-lg-none "
          onClick={() => {
            setShowMenu(showMenu === true ? false : true);
          }}
        >
          <h1 className="px-5">X</h1>
        </div>
      </nav>
      
      <div className={`${showMenu ? "d-flex d-none" : "d-flex"} position-fixed znavbar`}>
        <ul className="nav-links d-lg-none my-5">
          <div className="d-flex flex-column gap-3 my-5 listnone">
            <i className="uil uil-times navCloseBtn"></i>
            <Link to={"/LatestNews"}>
              <a className="linkcolour" href="#">ख़बरों की ख़बर</a>
            </Link>
            <Link to={"/Home"}>
              <a className="linkcolour" href="#">$$$</a>
            </Link>
              <a className="linkcolour" href="#">मंथन</a>
            <Link to={"/News"}>
              <a className="linkcolour" href="#">खबरे</a>
            </Link>
              <a className="linkcolour" href="#">साहित्य</a>
              <a className="linkcolour" href="#">संपदकी</a>
            <Link to={"/Science&Tech"}>
              <a className="linkcolour" href="#">विज्ञान और तकनीक</a>
            </Link>
              <a className="linkcolour" href="#">वीडियो</a>
            <Link to={"/Health"}>
              <a className="linkcolour" href="#">स्वस्थ्य</a>
            </Link>
              <a className="linkcolour" href="#">शहरनामा</a>
              <a className="linkcolour" href="#">हमारे बारे में</a>
            <Link to={"/Contact-us"}>
              <a className="linkcolour" href="#">संपर्क</a>
            </Link>
          </div>
        </ul>
      </div>
    </div>

    </>
  );
}

export default Navbar;
