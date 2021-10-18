import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../hooks/UseAuth";
import "./Header.css"

const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
        <Navbar bg="dark" variant="light" sticky="top">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-end">
             <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <span className="text-color"> {user.displayName}</span>
            <img width="35px " className="p-1" src={user.photoURL} alt="" />
           { 
              user.email ? 
              <button onClick={logOut}>Log out</button>
              : 
           
           <Nav.Link href="/login">LogIn</Nav.Link>
           
           }
            
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
    </Navbar.Collapse>
          <Nav className="me-auto">
           
          </Nav>
          </Container>
        </Navbar>
        
      </>
    );
};

export default Header;