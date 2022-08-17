import { NextComponentType } from "next"
import Link from 'next/link'
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header: NextComponentType = () => {
  return (
    <Navbar bg="primary" variant="dark" className="mb-4" expand="lg">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            Bina-Church
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <NavDropdown title="Membros" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link href="/members">
                  <Nav.Item>Listar</Nav.Item>
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link href="/members/create">
                  <Nav.Item>Cadastrar</Nav.Item>
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;