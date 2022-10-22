import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { authenticateWithGoogle, fetchUser } from "../utils/firebaseFunction";
import { setUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";

function LoginModal({ setIsModalOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChamge = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(login.email) &&
      login.password
    ) {
      console.log("ok");
      try {
        await signInWithEmailAndPassword(auth, login.email, login.password);

        onSnapshot(doc(db, "Users", login.email), (doc) => {
          sessionStorage.setItem("user", JSON.stringify(doc.data()));
          console.log(doc.data());
          dispatch(setUser(doc.data()));
        });
        setIsModalOpen(false);
      } catch (error) {
        setMsg(error.message);
      }
    }
  };

  return (
    <div className="login-mod">
      <button className="close-btn" onClick={() => setIsModalOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img
        src="./img/twitter-logo-vector-png-clipart-1.png"
        className="twitterLogo"
        alt=""
      />
      <h1>Sign in to Twitter</h1>
      <div className="alert">
        <h5>
          {msg?.includes("wrong-password") || msg?.includes("user-not-found")
            ? "Wrong Email/Password"
            : ""}
        </h5>
      </div>
      <button onClick={() => authenticateWithGoogle(navigate)}>
        <i className="fa-brands fa-google"></i>
        <span>Sign in with Google</span>
      </button>
      <div className="or"> or</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Phone, email, or username"
          name="email"
          value={login.email}
          onChange={handleChamge}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={login.password}
          onChange={handleChamge}
        />
        <button type="submit" className="next">
          Next
        </button>
      </form>
    </div>
  );
}

export default LoginModal;
