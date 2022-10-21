import styled from "styled-components";
import img from "../../assets/Capture.PNG";

export const LoginSection = styled.section`
   {
    margin: 0;
    padding: 0;
    color: black;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  .login-image {
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 50vw;
    height: 95vh;
  }
  .main {
    display: flex;
    font: 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
      Arial, sans-serif;
    height: 100vh;
  }

  .main h1 {
    margin-top: 4rem;
    font-size: 5rem;
  }
  .main h3 {
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  .twitterLogo {
    padding-top: 5rem;
    width: 3rem;
  }
  .mid {
    width: 300px;
  }
  .signUp {
    padding-left: 3rem;
  }
  .terms,
  .terms a {
    text-decoration: none;
    color: rgb(82, 82, 82);
    font-size: 11px;
  }
  button {
    width: 300px;
    border: 1px solid #3c40433b;
    border-radius: 25px;
    background-color: transparent;
    padding: 10px;
    margin: 10px 0;
    font-size: 16px;
  }
  button:hover {
    cursor: pointer;
  }
  .apple:hover {
    background-color: rgba(128, 128, 128, 0.226);
  }
  .email:hover {
    background-color: rgb(25, 124, 190);
  }
  .terms-conditions span {
    cursor: pointer;
    color: rgb(29, 155, 240);
    font-size: 10px;
  }
  .terms a {
    color: rgb(29, 155, 240);
  }
  .email {
    background-color: rgb(29, 155, 240);
    color: white;
    border: none;
  }
  .mid h5 {
    padding-top: 3.4rem;
    font-size: 1rem;
  }
  .signIn {
    margin-top: 20px;
    color: rgb(29, 155, 240);
  }
  .or {
    text-align: center;
  }
  footer {
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: white;
    cursor: pointer;
  }
  footer span {
    text-decoration: none;
    color: rgb(82, 82, 82);
    padding: 12px 10px;
    font-size: 0.84rem;
  }
  footer span:hover {
    text-decoration: underline;
  }
  button span {
    padding-left: 0.5rem;
  }
  @media (max-width: 1000px) {
    .login-image {
      display: none;
    }
  }
`;

export const LoginModalSec = styled.section`
   {
    z-index: 1;
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #0000003d;
  }
  .hide-loginModal {
    display: none;
  }
  .login-mod {
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 16px;
    width: 35rem;
    min-height: 35rem;
  }
  .close-btn {
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    width: 4rem;
    font-size: 1.5rem;
  }
  .login-mod img {
    padding-top: 1rem;
  }
  .login-mod h1 {
    font-size: 2rem;
    margin: 1rem;
  }
  .login-mod input {
    margin: 0.5rem;
    padding: 6px;
    height: 3rem;
    width: 19rem;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .login-mod input::placeholder {
    font-size: 1.1rem;
    color: rgb(168, 168, 168);
  }
  .or {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    color: rgba(0, 0, 0, 0.35);
    margin: 8px 0px;
  }
  form {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .alert {
    height: 2rem;
    color: red;
  }
  .next {
    background-color: black;
    color: white;
  }

  @media (max-width: 600px) {
    .loginModal {
      background: white;
    }
    .close-btn {
      position: fixed;
      top: 0;
      left: 0;
      border: 0;
      width: 4rem;
      font-size: 1.5rem;
    }
  }
`;
