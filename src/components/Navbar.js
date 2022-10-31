import React from "react";
import reactIcon from "./reactIcon.png"

export default function Navbar() {
  return(
    <nav className="navBar">
      <div>
        <img src={reactIcon} alt="" width={40}/>
        <h2>ReactFacts</h2>
      </div>
      <div>
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}