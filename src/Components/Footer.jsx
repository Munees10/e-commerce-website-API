import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: '100%', height: 'auto' }} className='d-flex flex-column justify-content-center align-items-center bg-info'>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap p-5">
        <div className="website" style={{ width: '400px', color: 'black' }}>
          <h4><i style={{overflowY:'hidden'}} class="fa-sharp fa-solid fa-store"></i>
            TeeRex</h4>
          <h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
          <h6>Code licensed By Munees, docs CC BY 3.0.</h6>
          <p> Currently v1.0.0</p>
        </div>
        <div style={{ color: "black" }} className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: "none", color: "black" }}>Home</Link>
          <Link to={'/wishlist'} style={{ textDecoration: "none", color: "black" }}>Wishlist</Link>
          <Link to={'/cart'} style={{ textDecoration: "none", color: "black" }}>Cart</Link>

        </div>
        <div className="guides d-flex flex-column">
          <h4 style={{ color: "black" }}>Guides</h4>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "black" }}>React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "black" }}>React Bootstrap</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "black" }}>Routing</Link>
        </div>
        <div className="contact">
          <h4 style={{ color: "black" }}>Contact Us</h4>
          <div style={{ color: "black" }} className='sub d-flex mt-3'>
            <p>Phone No:</p><span className='ms-1'> 9544622984</span>
          </div>
          <div className="icons fs-4 d-flex justify-content-evenly mt-3" >
            <Link to={'https://mail.google.com/mail/u/0/#inbox'} style={{ textDecoration: "none", color: "black"}}><i style={{overflowY:'hidden'}} className="fa-solid fa-envelope"></i></Link>
            <Link to={'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'} style={{ textDecoration: "none", color: "black" }}><i style={{overflowY:'hidden'}} className="fa-brands fa-twitter"></i></Link>
            <Link to={'https://www.linkedin.com/feed/'} style={{ textDecoration: "none", color: "black"}}><i style={{overflowY:'hidden'}} className="fa-brands fa-linkedin"></i></Link>
            <Link to={'https://www.instagram.com/'} style={{ textDecoration: "none", color: "black" }}><i style={{overflowY:'hidden'}} className="fa-brands  fa-instagram"></i></Link>
          </div>
        </div>
      </div>
      <p style={{ color: "black" }}>Copyright © 2023 TeeRex. Built with React.</p>
    </div>
  )
}

export default Footer