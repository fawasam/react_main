import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/getbooks">GET</Link>
        <Link to="/addbooks">ADD</Link>
        <Link to="/deletebooks">DELETE</Link>
      </div>
    </div>
  );
};

export default Layout;
