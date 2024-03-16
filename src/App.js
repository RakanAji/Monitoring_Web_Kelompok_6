import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import DeskripsiAlat from './components/DeskripsiAlat';
import DataMonitoringAlat from './components/DataMonitoringAlat';
import ProfileTim from './components/ProfileTim';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Monitoring Alat</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Deskripsi Alat Penyiraman</Nav.Link>
          <Nav.Link href="#">Data Monitoring Alat</Nav.Link>
          <Nav.Link href="#">Profile Tim</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container mt-4">
        <DeskripsiAlat />
        <DataMonitoringAlat />
        <ProfileTim />
      </div>
      <Footer />
    </div>
  );
}

export default App;
