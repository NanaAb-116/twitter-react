import styled from "styled-components";

export const NavStyledSec = styled.section`
  .left-sec {
    height: 100vh;
    position: sticky;
    top: 0;
    margin-right: 1.3rem;
    margin-bottom: 1rem;
  }
  .twitter-logo:hover {
    background-color: #1f2c39;
  }
  .twitter-logo {
    cursor: pointer;
    color: white;
    font-size: 2rem;
    margin-left: 1rem;
    padding: 0.8rem;
    border-radius: 25px;
  }
  .nav h4 {
    font-weight: 300;
    font-size: 1.3rem;
    margin-left: 1rem;
    padding-top: 1.5rem;
  }
  .nav-links span {
    font-size: 2rem;
  }
  .nav-links {
    cursor: pointer;
    list-style: none;
    padding: 0.9rem;
    margin-left: 1rem;
    border-radius: 2rem;
  }
  .nav-links:hover {
    background-color: #1f2c39;
  }
  .nav-links h4 {
    display: inline;
  }
  .tweet-btn {
    cursor: pointer;
    margin-top: 2rem;
    font-size: 1.3rem;
    border: none;
    background-color: rgb(29, 155, 240);
    color: white;
    border-radius: 25px;
    width: 225px;
    height: 52px;
  }
  .tweet-btn-round {
    cursor: pointer;
    margin-top: 2rem;
    display: none;
    border: none;
    background-color: rgb(29, 155, 240);
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .quil {
    color: white;
    font-size: 1.5rem;
  }
  .small-round {
    display: none;
    position: absolute;
    bottom: 10px;
  }
  .footer-profile {
    position: fixed;
    bottom: 10px;
    // font-size: xx-large;
  }
  .media {
    display: flex;
  }
  .footer-profile-more {
    position: absolute;
    top: 1rem;
    right: -3rem;
    font-size: xx-large;
  }
  .tweet-feed-dp {
    border-radius: 25px;
    margin-right: 0.5rem;
  }
  nav {
    display: none;
  }
  @media all and (max-width: 1240px) {
    .left-sec {
      margin-left: 2rem;
    }
    .nav-links h4 {
      display: none;
    }
    .tweet-btn {
      display: none;
    }
    .tweet-btn-round {
      display: block;
      border: none;
      margin-right: 0 !important;
      background-color: rgb(29, 155, 240);
    }
    .small-round {
      display: block;
      position: relative;
      margin-top: 3rem;
    }
    .footer-profile {
      display: none;
    }
  }
  @media all and (max-width: 1020px) {
    .left-sec {
      margin-left: 5rem;
    }
  }
  @media all and (max-width: 800px) {
    .left-sec {
      margin: 0;
    }
  }
  @media (max-width: 500px) {
    .left-sec {
      display: none;
    }
    nav {
      z-index: 1;
      border-top: 1px solid rgba(120, 120, 120, 0.12);
      border-bottom: 1px solid rgba(120, 120, 120, 0.1);
      display: flex;
      justify-content: space-between;
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #16202a;
      padding: 0.5rem;
    }
    .bottom-icons {
      background-color: transparent;
      padding-right: 1rem;
      color: white;
      font-size: 1.4rem;
      border: 0;
    }
  }
`;
