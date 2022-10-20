import React from "react";
import NavFooter from "./NavFooter";
import { NavStyledSec } from "./styles/Nav.styled";

function Nav() {
  return (
    <NavStyledSec>
      <div className="left-sec">
        <section className="nav">
          <ul>
            <i className="fa-brands fa-twitter twitter-logo"></i>
            <li className="nav-links">
              <span className="material-icons-round icons"> home </span>
              <h4 style={{ fontWeight: "600" }}>Home</h4>
            </li>
            <li className="nav-links">
              <span className="material-icons-outlined icons"> tag </span>
              <h4>Explore</h4>
            </li>
            <li className="nav-links">
              <span className="material-icons-outlined icons">
                notifications
              </span>
              <h4>Notifications</h4>
            </li>
            <li className="nav-links">
              <span className="material-icons-outlined icons"> email </span>
              <h4>Messages</h4>
            </li>
            <li className="nav-links">
              <span className="material-icons-outlined icons"> bookmarks </span>
              <h4>Bookmarks</h4>
            </li>

            <li className="nav-links">
              <span className="material-icons-outlined icons"> sort </span>
              <h4>Lists</h4>
            </li>
            <li className="nav-links">
              <span className="material-icons-outlined icons"> person </span>
              <h4>Profile</h4>
            </li>
            <li className="nav-links">
              <span className="material-icons-outlined icons">
                {" "}
                more_horiz{" "}
              </span>
              <h4>More</h4>
            </li>
            <button className="tweet-btn">Tweet</button>
            <button className="tweet-btn-round">
              <i className="quil fa-solid fa-feather"></i>
            </button>
          </ul>
        </section>
        <NavFooter />
      </div>
      <nav>
        <button class="bottom-icons">
          <i class="fa-solid fa-house"></i>
        </button>
        <button class="bottom-icons">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
        <button class="bottom-icons">
          <i class="fa-regular fa-bell"></i>
        </button>
        <button class="bottom-icons">
          <i class="fa-regular fa-envelope"></i>
        </button>
      </nav>
    </NavStyledSec>
  );
}

export default Nav;
