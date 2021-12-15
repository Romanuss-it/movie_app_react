import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Головна</Link>
      <Link to={{
        pathname: '/about',
        state: {
          fromLocation: true,
        }
      }}>Про проект</Link>
    </div>
  );
}

export default Navigation;