import React from "react";
import { Link } from "react-router-dom";



function Bar() {
  return (
    <>
      <div>
        <Link class="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/home"
        >Home</Link>
        <Link class="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/about"
        >About</Link>
        <Link class="link-dark link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" to="/Contact"
        >Contact</Link>
      </div>
    </>
  );
}

export { Bar };
