import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser, setUser } from "../features/user/userSlice";
import { fetchUser } from "../utils/firebaseFunction";

function NavFooter() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const userInfo = fetchUser();
    dispatch(setUser(userInfo));
  }, []);
  return (
    <>
      {user ? (
        <>
          <aside className={isPopupOpen ? "logout-popup" : "hide-logout-popup"}>
            <ul>
              <li>Change Profile Picture</li>
              <li onClick={() => dispatch(clearUser())}>
                Log out @{user?.userName || user?.displayName}
              </li>
            </ul>
          </aside>
          <section
            className="nav-footer"
            onClick={() => setIsPopupOpen(!isPopupOpen)}
          >
            <div className="footer-profile">
              <div className="media">
                <img
                  src="./img/gQb_4vsj_400x400.jpg"
                  className="tweet-feed-dp"
                  alt="dp"
                  height="50px"
                />
                <div>
                  <h5>{user?.displayName}...</h5>
                  <p>@{user?.userName || user?.displayName}</p>
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
              />
            </div>
          </section>
        </>
      ) : (
        <section className="nav-footer">
          <Link to="/login">
            <h3 className="footer-profile">
              Login
              <span>
                <i className="fa-solid fa-right-to-bracket"></i>
              </span>
            </h3>
          </Link>
        </section>
      )}
    </>
  );
}

export default NavFooter;
