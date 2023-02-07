import React from "react";
import "./navbar.css";

export default function Navbar({ sticky = false }) {
  const styles = {
    sticky: `position: fixed;
        top: 0;
        width: 100%;`,
  };
  return (
    <div className={sticky ? "navbar sticky" : "navbar"}>
      <ul className="navbar-li">
        <li>
          <a href="_blank">Home</a>
        </li>
        <li>
          <a href="_blank">DevTodo.co</a>
        </li>
        <li>
          <a href="_blank">Me</a>
        </li>
        <li>
          <a href="_blank">Contact</a>
        </li>
      </ul>
    </div>
  );
}
