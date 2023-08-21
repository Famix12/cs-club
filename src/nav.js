import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Logo from "./assets/CS_Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

// import Navbar from 'react-bootstrap/Navbar';

function NavbarComponent() {
  return (
    <Navbar
      expand="lg"
      className="bg-* navbar-dark"
      style={{ margin: "0 0 10vh 0" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link><Link className="nav-item" to={'/'}>الرئيسية</Link></Nav.Link>

            <NavDropdown title="تعرف أكثر" id="basic-nav-dropdown" className="nav-item" style={{color : "white"}}>
              <NavDropdown.Item id="drop-item">
                <Link className="nav-dropdownLink" to={"/aboutus"}>من نحن</Link>
              </NavDropdown.Item>
              
              <NavDropdown.Item id="drop-item">
                <Link className="nav-dropdownLink" to={"/team"}>فريق إدارة النادي</Link>
              </NavDropdown.Item>

              {/* <NavDropdown.Item id="drop-item">
                <Link className="nav-dropdownLink" to={"/members"}>أعضاء النادي</Link>
              </NavDropdown.Item> */}

            </NavDropdown>

            <Nav.Link  ><Link className="nav-item" to={'/events'}>الفعاليات</Link></Nav.Link>

            <Nav.Link ><Link className="nav-item" to={'/join'}>إنظم إلينا</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
