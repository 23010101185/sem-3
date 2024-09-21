import React from "react";
import {Link} from "react-router-dom";


function Header() {
  return (
    <>
      <ul class="nav bg-dark bg-gradient nav-underline bg-opacity-50">
        <li class="nav-item">
          <Link class="nav-link text-white fw-bolder ms-5" aria-current="page" to='/home'>HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bolder" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white fw-bolder" to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
