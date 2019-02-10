import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import SearchBar from "../SearchBar";

const AppNavbar = () => (
  <Navbar staticTop inverse collapseOnSelect>
    <Navbar.Header>
      <div className="navbar">
        <Navbar.Brand>
          <Link to="/">COOKBOOK</Link>
        </Navbar.Brand>
      </div>
    </Navbar.Header>
  </Navbar>
);

export default AppNavbar;
