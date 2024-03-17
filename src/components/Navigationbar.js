import { Navbar, Nav } from "react-bootstrap"
import React from 'react';



const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Monitoring Alat</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#deskripsialat">Deskripsi Alat </Nav.Link>
          <Nav.Link href="#datamonitor">Data Monitoring Alat</Nav.Link>
          <Nav.Link href="#profile">Profile Tim</Nav.Link>
          
        </Nav>
      </Navbar>
    
    </div>
  )
}

export default Navigationbar