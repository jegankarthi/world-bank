import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" id='style' >
      <Container>
        <Navbar.Brand href="#/" style={{fontSize:'larger'}}><b>WORLD BANK</b></Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#/Create" ><b>CREATE USER</b> </Nav.Link>
            <Nav.Link href="#/Deposit"><b>DEPOSIT</b></Nav.Link>
            <Nav.Link href="#/Withdraw"><b>WITHDRAW</b></Nav.Link>
            <Nav.Link href="#/Alldata"><b>ALLDATA</b></Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

