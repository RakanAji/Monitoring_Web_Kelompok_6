import { Navbar, Nav } from "react-bootstrap"
import React from 'react';
import "../css/main.css";


const Navigationbar = () => {
  return (
    <div>
      <Navbar  className="navigation-bar"> 
        <Navbar.Brand href="/">SMART PLANT</Navbar.Brand>
        <Nav >
          
          <Nav.Link href="#deskripsialat" style={{fontSize: 25}}>Deskripsi Alat </Nav.Link> 
          <Nav.Link href="#datamonitor" style={{fontSize: 25}}>Data Monitoring Alat</Nav.Link>
          <Nav.Link href="#profile" style={{fontSize: 25}}>Profile Tim</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navigationbar