import styled from "styled-components";

export const MainStyled = styled.div`
   {
    border: 1px solid rgba(120, 120, 120, 0.1);
    border-top: 0;
    border-bottom: 0;
    padding: 0;
    width: 35vw;
  }
  .home-profile-img {
    display: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 1;
    background-color: #16202af7;
    width: 35vw;
    padding: 1rem 0.5rem;
  }
  .form {
    margin-top: 4rem;
    padding-left: 0.5rem;
  }
  .stars {
    margin-right: 1.5rem;
  }
  #tweet-field {
    border: 0;
    padding: 4px;
    font-size: 1.3rem;
    width: 80%;
    min-height: 4rem;
    color: white;
    background-color: #16202a;
    outline: none;
    resize: none;
  }
  #tweet-field::-webkit-scrollbar {
    display: none;
  }
  .tweet-field::placeholder {
    font-size: 1.3rem;
    color: rgb(168, 168, 168);
  }
  .tweet-images {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
  }
  .tweet-images .img {
    overflow: hidden;
    position: relative;
    height: 10rem;
    width: 15rem;
    border-radius: 1rem;
    margin: 6px;
  }
  .tweet-images img {
    position: relative;
    width: 14rem;
    transform: scale(1.3);
  }
  #upload {
    cursor: pointer;
  }
  .close {
    position: absolute;
    top: 8px;
    left: 8px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #43474b;
    height: 30px;
    width: 30px;
  }
  .close:hover {
    background-color: #5f6366;
  }
  .alert {
    z-index: 2;
    background-color: rgba(29, 156, 240);
    position: fixed;
    bottom: 1rem;
    padding: 0.3rem 1rem;
  }
  .iconsNbtn {
    display: flex;
    justify-content: space-between;
    padding-left: 3rem;
    margin-top: 1.5rem;
    border-top: 1px solid rgba(120, 120, 120, 0.1);
  }
  .iconsNbtn span {
    padding: 0.8rem 0.5rem;
  }
  .tweet-field-icons {
    cursor: pointer;
    color: rgba(29, 156, 240, 0.748);
    margin: 0.7rem;
  }
  .tweet-field-btn {
    cursor: pointer;
    border: none;
    background-color: rgba(29, 156, 240, 0.606);
    color: white;
    border-radius: 25px;
    width: 76px;
    height: 36px;
    margin: 0.7rem;
  }
  .show:hover {
    background-color: #1a2530;
  }
  .show {
    text-align: center;
    border-top: 1px solid rgba(120, 120, 120, 0.12);
    border-bottom: 1px solid rgba(120, 120, 120, 0.1);
    padding: 1rem 0;
  }
  .show a {
    font-size: 1.1rem;
    text-decoration: none;
  }
  .show-tweets:hover {
    color: rgb(29, 156, 240);

    text-decoration: none;
  }
  .show-tweets {
    color: rgb(29, 156, 240);
    margin: 0;
  }
  .tweet {
    border-bottom: 1px solid rgba(120, 120, 120, 0.1);
  }
  .tweet:hover {
    background-color: #1a2530;
  }
  .tweet-feed-dp {
    border-radius: 25px;
    margin-right: 0.5rem;
  }
  .images-container {
    overflow: hidden;
    display: grid;
    gap: 0;
    grid-template-columns: auto auto;
  }
  .tweet-img {
    margin: 0.5rem 0;
    border-radius: 8px;
    max-width: 92%;
    height: inherit;
  }
  .media {
    display: flex;
  }
  .twt {
    flex: 1;
    position: relative;
  }
  .at-n-time {
    opacity: 0.7;
  }
  .tweet-profile {
    margin-top: 1rem;
    margin-left: 0.7rem;
  }
  .tweet-profile-more {
    position: absolute;
    top: 5px;
    right: 2px;
    font-size: large;
  }
  .responses {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }
  .responses div {
    opacity: 0.7;
  }
  .response-count {
    display: inline;
    margin-left: 0.5rem;
  }
  .responses div {
    cursor: pointer;
    font-size: medium;
  }
  @media all and (max-width: 1240px) {
     {
      width: 50vw;
    }
  }
  @media all and (max-width: 1020px) {
     {
      width: 65vw;
    }
  }
  @media all and (max-width: 800px) {
    .main {
      width: 80vw;
    }
  }
  @media (max-width: 500px) {
     {
      width: 100vw;
      margin: 0;
      border: 0;
    }
    .tweets {
      margin-top: 4.5rem;
    }
    .form {
      // display: none;
      padding: 0;
    }
    .form .tweet-feed-dp {
      display: none;
    }
    .header {
      background-color: #16202af7;
      position: fixed;
      top: 0;
      padding: 1rem 0.2rem;
      width: 100%;
      z-index: 1;
      margin-left: -0.4rem;
    }
    .iconsNbtn {
      padding: 0;
    }
    .iconsNbtn span {
      padding: 0;
      padding-right: 10px;
    }
    .show {
      margin: 0 -0.8rem;
      margin-top: 4rem;
      border-top: 1px solid rgba(120, 120, 120, 0.12);
      border-bottom: 1px solid rgba(120, 120, 120, 0.1);
    }
    .home-profile-img {
      display: inline;
      border-radius: 25px;
    }
    .home-text {
      display: inline;
      position: absolute;
      top: 1.5rem;
      margin-left: 1rem;
    }
    .feed {
      margin: 0 -0.8rem;
    }
    .tweet-img {
      max-width: 20rem;
    }
  }
`;
