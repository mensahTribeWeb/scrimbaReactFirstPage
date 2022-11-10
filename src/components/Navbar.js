import React from "react";
import reactIcon from "./reactjs-icon.png"


export default function Navbar() {
  return(
    <nav className="nav">
      <div className="logo-title">
        <img className="reactIcon"src={reactIcon} alt="" width={40}/>
        <h3>ReactFacts</h3>
      </div>
      <div className="scrimProject">
        <h4>React Course - Project 1</h4>
      </div>
    </nav>
  );
}