import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Nav className="me-auto p-1 text">
            <i class="bx bx-home icon mt-3 d-flex flex-row link">
              <Link to="/home" className="link"> 🏠 Home</Link>
            </i>
            <i class="bx bxs-contact icon mt-3 ms-3 d-flex flex-row link">
              <Link to="/contacto" className="link">📒 Contacto</Link>
            </i>
          </Nav>
          <Navbar.Brand href="/home" className="mt-3 text">
            Happy Cake <span>🍰</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigation;