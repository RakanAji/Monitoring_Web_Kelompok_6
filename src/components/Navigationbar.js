import { Navbar, Nav } from "react-bootstrap"



const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Monitoring Alat</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#DeskripsiAlat">Deskripsi Alat Penyiraman</Nav.Link>
          <Nav.Link href="#DataMonitoringAlat">Data Monitoring Alat</Nav.Link>
          <Nav.Link href="#ProfileTim">Profile Tim</Nav.Link>
          
        </Nav>
      </Navbar>
    
    </div>
  )
}

export default Navigationbar