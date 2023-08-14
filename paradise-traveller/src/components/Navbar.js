import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Navbarr(props) {
  let isLogin = localStorage.getItem("key");
  let item = JSON.parse(localStorage.getItem("key"));
  console.log(props);
  return (
    <>{isLogin ? <Navbarr4LoggedInUser /> : <Navbarr4NotLoggedInUser />}</>
  );
}

function Navbarr4LoggedInUser() {
  let navigate = useNavigate();

  const processLogout = () => {
    localStorage.clear();
    navigate("/Signin");
  };
  var item = JSON.parse(localStorage.getItem("key"));

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          {/* <img  style={{height:50,width:60}} src={logo} alt="" /> */}
          <Navbar.Brand as={Link} to="/">
            Traveler's Paradise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                Profile
              </Nav.Link>
              <Nav.Link as={Link} to="/review">
                Review
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>

              <Nav.Link onClick={processLogout}>Logout</Nav.Link>
              <strong style={{ marginLeft: 20, marginTop: 8, color: "white" }}>
                Welcome {item.data.name}
              </strong>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function Navbarr4NotLoggedInUser() {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Traveler's Paradise
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/aboutus">
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

export default Navbarr;
