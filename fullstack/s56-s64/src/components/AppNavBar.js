// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

import { Container, Nav, Navbar } from "react-bootstrap";

export default function AppNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary shadow">
      <Container>
        <Navbar.Brand href="#home">ZUITT BOOKING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Courses</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
