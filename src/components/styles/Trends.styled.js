import styled from "styled-components";

export const TrendsSection = styled.div`
   {
    margin-left: 1rem;
    height: 100%;
    color: white;
    position: sticky;
    top: 0;
  }
  .search-twitter {
    color: white;
    width: 350px;
    height: 53px;
    border-radius: 25px;
    border: 0;
    background-color: #1f2732;
    padding-left: 3rem;
    outline: none;
  }
  .search-twitter::placeholder {
    color: rgb(168, 168, 168);
  }
  .search-icon {
    position: absolute;
    top: 1rem;
    left: 1.2rem;
  }
  .trends-for-you {
    margin-top: 1rem;
    width: 350px;
    background-color: #1f2732;
    border-radius: 15px;
    padding: 10px;
  }
  .trends-for-you span {
    font-size: small;
  }
  .trends-for-you h5 {
    font-size: medium;
    margin: 0;
  }
  .trend-item {
    padding-top: 1rem;
    position: relative;
  }
  .trend-item:hover {
    background-color: #232d39;
  }
  .trend-item-more {
    position: absolute;
    top: 28px;
    right: 6px;
  }
  .trend-show-more {
    margin-top: 1rem;
    text-decoration: none;
    color: rgb(29, 155, 240);
    text-decoration: none;
  }
  @media all and (max-width: 1020px) {
     {
      display: none;
    }
  }
`;
