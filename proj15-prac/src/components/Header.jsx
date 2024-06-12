import { useState } from "react";

import logo from "../assets/logo.jpg";

function Header({ totalMealsCount, openCart }) {
  return (
    <div id="main-header">
      <div id="title">
        <img src={logo} alt="" />
        <h1>ReactFood</h1>
      </div>
      <div>
        <button className="text-button" onClick={openCart}>Cart ({totalMealsCount})</button>
      </div>
    </div>
  );
}

export default Header;
