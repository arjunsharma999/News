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
          <Link to={"/Home"}>
          <a href="#" className="logo">
            {" "}
            <img src="/images/logo.jpeg" width="20px" alt="" />
          </a>
          </Link>
          <ul className="nav-links">
            <i className="uil uil-times navCloseBtn"></i>
            <Link to={"/LatestNews"}>
              <a href="#">ख़बरों की ख़बर</a>
            </Link>

            <Link to={"/Home"}>
              <a href="#">होम</a>
            </Link>
            <Link to={"/Manthan"}>
              <a href="#">मंथन</a>
            </Link>
            <Link to={"/News"}>
              <a href="#">खबरे</a>
            </Link>
            <Link to={"/Sahitya"}>
              <a href="#">साहित्य</a>
            </Link>
            <Link to={"/Sampadk"}>
              <a href="#">संपदकी</a>
            </Link>
            <Link to={"/Padah-rabar"}>
              <a href="#">पहाड़ रैबार</a>
            </Link>
            <Link to={"/Science&Tech"}>
              <a href="#">विज्ञान और तकनीक</a>
            </Link>
            <Link to={"/Video"}>
              <a href="#">वीडियो</a>
            </Link>
            <Link to={"/Health"}>
              <a href="#">स्वस्थ्य</a>
            </Link>
            <Link to={"/Shernama"}>
              <a href="#">शहरनामा</a>
            </Link>
            <Link to={"/About"}>
              <a href="#">हमारे बारे में</a>
            </Link>
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
            <h1>X</h1>
          </div>
        </nav>

        <div className={`${showMenu ? "d-flex d-none" : "d-flex"}`}>
          <ul className="nav-links d-lg-none">
            <div className="d-flex flex-column gap-3 ">
              <i className="uil uil-times navCloseBtn"></i>
              <Link to={"/LatestNews"}>
                <a href="#">ख़बरों की ख़बर</a>
              </Link>

              <Link to={"/Home"}>
                <a href="#">होम</a>
              </Link>
              <Link to={"/Manthan"}>
                <a href="#">मंथन</a>
              </Link>
              <Link to={"/News"}>
                <a href="#">खबरे</a>
              </Link>
              <Link to={"/Sahitya"}>
                <a href="#">साहित्य</a>
              </Link>
              <Link to={"/Sampadk"}>
                <a href="#">संपदकी</a>
              </Link>
              <Link to={"/Padah-rabar"}>
                <a href="#">पहाड़ रैबार</a>
              </Link>
              <Link to={"/Science&Tech"}>
                <a href="#">विज्ञान और तकनीक</a>
              </Link>
              <Link to={"/Video"}>
                <a href="#">वीडियो</a>
              </Link>
              <Link to={"/Health"}>
                <a href="#">स्वस्थ्य</a>
              </Link>
              <Link to={"/Shernama"}>
                <a href="#">शहरनामा</a>
              </Link>
              <Link to={"/About"}>
                <a href="#">हमारे बारे में</a>
              </Link>
              <Link to={"/Contact-us"}>
                <a href="#">संपर्क</a>
              </Link>
            </div>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Navbar;
