import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";



function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#home" className="text-white">Sales App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
            <Link to="/AddSales" className="nav-link text-white">
              Add Sales
            </Link>
             <Link to="/Top5Sales" className="nav-link text-white">
              Top 5 Sales
            </Link>
            <Link to="/TotleRevenue" className="nav-link text-white">
              Totle Revenue
            </Link>
            <Link to="/Login" className="nav-link text-white">
              Login
            </Link>
            <Link to="/Register" className="nav-link text-white">
              Register
            </Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
