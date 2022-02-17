import React from "react";
import logo from "./img/logo.png";

function Navbar() {
  return (
    <section id="navbar" className="navbar">
      <div className="logo">
        <h2>LetsShop</h2>
      </div>
      <div className="navbar-contents">
        <div className="navbar-links">
          <ul className="links">
            <li class="link">Register</li>
            <li class="link">Sign In</li>
          </ul>
        </div>
        <div className="cart-icon-count">
          <div className="count">2</div>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
