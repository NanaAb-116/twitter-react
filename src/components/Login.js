import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateWithGoogle } from "../utils/firebaseFunction";
import LoginFooter from "./LoginFooter";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { LoginSection, LoginModalSec } from "./styles/Login.styled";

function Login() {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <LoginSection>
      <div className="main">
        <div className="login-image"></div>
        <div className="signUp">
          <img
            src="./img/twitter-logo-vector-png-clipart-1.png"
            className="twitterLogo"
            alt=""
          />
          <h1>Happening now</h1>
          <h3>Join Twitter today.</h3>
          <div className="mid">
            <button onClick={() => authenticateWithGoogle(navigate)}>
              <i className="fa-brands fa-google"></i>
              <span>Sign up with Google</span>
            </button>
            <br />
            {/* <a href="#">
              <button className="apple">
                <i className="fa-brands fa-apple"></i>
                <span>Sign up with Apple</span>
              </button>
            </a> */}
            <p className="or">or</p>
            <button
              className="email"
              onClick={() => setIsSignUpModalOpen(true)}
            >
              Sign up with email
            </button>
            <div className="terms-conditions">
              <p className="terms">
                By signing up, you agree to the <span>Terms of Service</span>{" "}
                and <span>Privacy Policy</span>, including{" "}
                <span>Cookie Use</span>.
              </p>
              <h5>Already have an account?</h5>
              <button className="signIn" onClick={() => setIsModalOpen(true)}>
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
      {isSignUpModalOpen ? (
        <LoginModalSec>
          <SignUpModal
            setIsSignUpModalOpen={setIsSignUpModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </LoginModalSec>
      ) : (
        ""
      )}
      {isModalOpen ? (
        <LoginModalSec>
          <LoginModal setIsModalOpen={setIsModalOpen} />
        </LoginModalSec>
      ) : (
        ""
      )}
    </LoginSection>
  );
}

export default Login;
