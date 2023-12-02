import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  
  
  return (
    <>
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand style={{fontSize:'6vmin'}} className='ms-auto' href="#home"><i style={{overflowY:'hidden'}} class="fa-sharp fa-solid fa-store"></i> <Link to={'/'} style={{textDecoration:'none', color:'black'}}>TeReX</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-conent me-auto ms-auto" >
            {/* <Nav.Link className='ms-5' > <Link style={{textDecoration:'none', color:'black'}} to={'/'}>Home</Link></Nav.Link> */}
            <Nav.Link className='ms-5' ><Link style={{textDecoration:'none', color:'black'}} to={'/wishlist'}>WishList</Link></Nav.Link>
            <Nav.Link className='ms-5' ><Link style={{textDecoration:'none', color:'black'}} to={'/cart'}>Cart</Link></Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
  )
}

export default Header