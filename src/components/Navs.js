import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'


const Navs = () => {
    return (
        <div>

<Navbar bg="" expand="lg">
            <Link to="/">
  <Navbar.Brand></Navbar.Brand>
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto "variant="pills" defaultActiveKey="/planet">
      <Nav.Link eventKey="first" className="btnnav mb-2 mx-2  text-center">
      <Link to="/planet" className="btnlink">
      <Nav variant="pills" >PLANETS</Nav>
      </Link>
      </Nav.Link>
      <Nav.Link eventKey="second" className="btnnav mb-2 mx-2 text-center">
      <Link to="/character" className="btnlink">
      <Nav variant="pills">CHARACTERS</Nav>
      </Link>
      </Nav.Link>
       
     
    </Nav>
  </Navbar.Collapse>
</Navbar>

    
                

           
        </div>
    )
}

export default Navs
