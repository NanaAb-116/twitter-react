import React from "react";

function NavFooter() {
  return (
    <>
      <div className="footer-profile">
        <div className="media">
          <img
            src="./img/gQb_4vsj_400x400.jpg"
            className="tweet-feed-dp"
            alt="dp"
            height="50px"
          />
          <div>
            <h5>Grapeinemultime...</h5>
            <p>@_abonthetrack</p>
            <span className="material-icons-outlined footer-profile-more">
              more_horiz
            </span>
          </div>
        </div>
      </div>
      <div className="small-round">
        <img
          src="./img/gQb_4vsj_400x400.jpg"
          className="tweet-feed-dp"
          alt="dp"
          height="50px"
        />
      </div>
    </>
  );
}

export default NavFooter;
