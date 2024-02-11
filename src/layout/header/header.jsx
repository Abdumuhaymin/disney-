import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <nav>
            <h1 hidden>DISNEY +</h1>
            <button id="login">LOG IN</button>
          </nav>
        </div>
      </header>
    </>
  );
};
