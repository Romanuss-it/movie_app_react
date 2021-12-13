import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">home</Link>
      <Link to={{
        pathname: '/about',
        state: {
          fromLocation: true,
        }
      }}>about the project</Link>
    </div>
  );
}

export default Navigation;