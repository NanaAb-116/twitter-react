import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";

function SignUpModal({ setIsSignUpModalOpen, setIsModalOpen }) {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    fullName: "",
    userName: "",
  });
  const [msg, setMsg] = useState("");

  const handleChamge = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      /^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(login.email) &&
      login.password &&
      login.fullName &&
      login.userName
    ) {
      console.log("ok");
      try {
        const {
          user: { providerData },
        } = await createUserWithEmailAndPassword(
          auth,
          login.email,
          login.password
        );
        await setDoc(
          doc(db, "Users", providerData[0].email),
          {
            userId: providerData[0].uid,
            displayName: login.fullName,
            userName: login.userName,
            email: login.email,
            photoURL:
              "https://firebasestorage.googleapis.com/v0/b/twitter-3890d.appspot.com/o/twitter-avi-gender-balanced-figure.png?alt=media&token=a74e5163-0422-4b75-bad5-cc3333d361ef",
          },
          {
            merge: true,
          }
        );
        setIsSignUpModalOpen(false);
        setIsModalOpen(true);
      } catch (error) {
        setMsg(error.message);
      }
    }
  };

  return (
    <div className="login-mod">
      <button className="close-btn" onClick={() => setIsSignUpModalOpen(false)}>
        <i className="fa-solid fa-xmark"></i>
      </button>
      <img
        src="./img/twitter-logo-vector-png-clipart-1.png"
        className="twitterLogo"
        alt=""
      />
      <h1>Create your account</h1>
      <div className="alert">
        <h5>{msg?.includes("already") ? "User Already exists" : ""}</h5>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={login.email}
          onChange={handleChamge}
        />
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={login.fullName}
          onChange={handleChamge}
        />
        <input
          type="text"
          placeholder="Username"
          name="userName"
          value={login.userName}
          onChange={handleChamge}
        />
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

export default SignUpModal;
