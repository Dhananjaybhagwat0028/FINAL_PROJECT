import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function AdminNav() {
  let isLogin = localStorage.getItem("key");
  let item = JSON.parse(localStorage.getItem("key"));

  //  console.log("aaa"+item.data.aRole);
  return (
    <>{isLogin ? <Navbarr4LoggedAdmin /> : <Navbarr4NotLoggedInAdmin />}</>
  );
}

function Navbarr4LoggedAdmin() {
  let navigate = useNavigate();

  const processLogout = () => {
    localStorage.clear();
    navigate("/AdminLogin");
  };

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/homepage2">
            Traveler's Paradise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/homepage2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/list">
                List
              </Nav.Link>
              <Nav.Link as={Link} to="/r2">
                Review
              </Nav.Link>
              <Nav.Link as={Link} to="/abt2">
                About Us
              </Nav.Link>

              <Nav.Link onClick={processLogout}>Logout</Nav.Link>
              {/* <strong style={{ marginLeft:20 ,marginTop:8,color:"white"}}>Welcome {item.data.name}</strong> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function Navbarr4NotLoggedInAdmin() {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/homepage2">
            Traveler's Paradise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/homepage2">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/abt2">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/Signin">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNav;
