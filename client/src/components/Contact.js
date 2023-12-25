import React, { useEffect, useState } from 'react'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import ConstructionIcon from '@mui/icons-material/Construction';

const Contact = () => {

  return (
    <>
      
      <div className='container' >
     
        <div className='row'>
          <div className='col-md-4'>
            <div className='element_1'>
            <AddIcCallIcon/>
             <h2>Easy to contact</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='element_2'>
            < AccessTimeFilledIcon/>
             <h2>Response in time</h2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='element_3'>
            <ConstructionIcon/>
             <h2>Solve all issues</h2>
            </div>
          </div>

        </div>

     
      </div>

      <div className='contact_us'>
        <div className='container-con'>
          <form class="text-center border border-light p-5" action="https://formsubmit.co/32bf6ae93af912518828d5a0f1b4cde0" method="POST">
            <p className="h4 mb-4">Get in touch</p>
            <input type="text" id="defaultContactFormName" className="form-control mb-4" name="name" placeholder="Name" required />
            <input type="number" id="defaultContactFormName" className="form-control mb-4" name="phone" placeholder="phone number" required />
            <input type="email" id="defaultContactFormEmail" className="form-control mb-4" name="email" placeholder="E-mail" required />
            <div className="form-group">
              <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" name="message" placeholder="Message" required></textarea>
            </div>
            <button className="btn btn-info btn-block" type="submit" style={{ marginTop: 12 }}>Send</button>

          </form>
        </div>
      </div>


      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <h5>About Us</h5>
              <p>We are a team of developers who love to create amazing websites and web applications.</p>
            </div>
            <div className="col-md-6 col-lg-4">
              <h5>Contact Us</h5>
              <p>123 Main St, Anytown USA 12345</p>
              <p>Phone: 555-555-5555</p>
              <p>Email: info@yourwebsite.com</p>
            </div>
            <div className="col-lg-4">
              <h5>Follow Us</h5>
              <ul className="social-media">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p>&copy; 2023 Your Website. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Contact