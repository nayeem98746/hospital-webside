import { Button, Container, Nav, Navbar,  } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import "./Header.css"

const Header = () => {
  const {user, logOut} = useAuth()
    return (
      <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home"> SAN HOSPITAL </Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            
          
              
           {
             user?.email ? 
             <Container >
               
                <Button onClick={logOut} >Logout</Button>
             </Container>
             
             :
           <Nav.Link as={Link} to="/login">
             <Button>LogIn</Button>
             </Nav.Link>}
           
           
            
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.email}</a>
          </Navbar.Text>
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;