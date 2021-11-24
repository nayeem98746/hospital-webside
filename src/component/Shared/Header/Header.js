import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import "./Header.css"

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
          <Container>
          <Navbar.Brand  href="/home">SAN Hospital</Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <span className="text-color"> {user?.displayName}</span>
            <img width="35px " className="p-1" src={user?.photoURL} alt="" />
           { 

              user?.email ? 
              <Button onClick={logOut}>Log out</Button>
              : 
           
           <Nav.Link href="/login">LogIn</Nav.Link>
           
           }
            
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
          </Navbar.Text>
    </Navbar.Collapse>
         
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;