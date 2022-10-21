import React from "react";
import MainSec from "./MainSec";
import Nav from "./Nav";
import Trends from "./Trends";

function Home() {
  return (
    <div className="sec">
      <Nav />
      <MainSec />
      <Trends />
    </div>
  );
}

export default Home;
