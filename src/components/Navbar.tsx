import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

export default function NavBar() {
  const location = useLocation()

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-3 w-100 fixed-top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          Career<span className="text-primary">Explorer</span>
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Homepage
            </Nav.Link>
            <Nav.Link as={Link} to="/quizzes" className="text-white">
              Careers Quizzes
            </Nav.Link>
            <Nav.Link as={Link} to="/organizations" className="text-white">
              For Organizations
            </Nav.Link>
            <Nav.Link as={Link} to="/degrees" className="text-white">
              Degrees
            </Nav.Link>
            <Nav.Link as={Link} to="/community" className="text-white">
              Community
            </Nav.Link>
            <Nav.Link as={Link} to="/more" className="text-white">
              More
            </Nav.Link>
          </Nav>

          {/* Search & Buttons */}
          <div className="d-flex align-items-center">
            <Nav.Link as={Link} to="/search" className="text-white me-3">
              🔍
            </Nav.Link>

            {location.pathname !== "/login" && (
              <Button variant="outline-primary" className="me-2">
                <Link to="/login" className="text-decoration-none text-primary">
                  Log In
                </Link>
              </Button>
            )}

            {location.pathname !== "/register" && (
              <Button variant="outline-primary" className="me-2">
                <Link to="/register" className="text-decoration-none text-primary">
                  Register
                </Link>
              </Button>
            )}
            <Button variant="light" className="fw-bold">
              Take the free test
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

