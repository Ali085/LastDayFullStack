import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

function Navbar() {
  return (
    <nav>
      <div className="allNav">
        <div className="navImg">
          <img src="https://preview.colorlib.com/theme/aroma/img/logo.png" alt="Logo" />
        </div>
        <div className="navList">
          <ul>
           <Link to={"/"}><li>Home</li></Link> 
           <Link to={"/addpage"}><li>Add</li></Link> 
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navIcon">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="navBtn">
          <button>Buy Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
