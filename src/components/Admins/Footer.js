import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Link to="/admin">
        <h1>Admin login</h1>{" "}
      </Link>
    </div>
  );
}

export default Footer;
