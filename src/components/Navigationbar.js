import { Navbar, Nav } from "react-bootstrap";
import React from 'react';
import "../css/main.css";

const Navigationbar = () => {
  return (
    <div >
      <Navbar className="navigation-bar" expand="lg">
        <Navbar.Brand href="/" className="mr-auto" >SMART PLANT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#deskripsialat"className="mr-auto" >Deskripsi Alat</Nav.Link>
            <Nav.Link href="#datamonitor" className="mr-auto">Data Monitoring Alat</Nav.Link>
            <Nav.Link href="#profile" className="mr-auto">Profile Tim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
