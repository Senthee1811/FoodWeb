import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} />
  <p>2024 Tomato Web App. All rights reserved. This app is your one-stop solution for tracking, managing, and enjoying your tomato garden. Whether you're a seasoned gardener or just starting out, our tools and resources will help you grow the best tomatoes possible. For support or inquiries, contact us at support@tomatoapp.com or call 1-800-TOMATOES. Follow us on social media for tips, updates, and community stories!</p>
  <div className="footer-social-icons">
    <img src={assets.facebook_icon} alt="" />
    <img src={assets.twitter_icon}alt="" />
    <img src={assets.linkedin_icon} alt="" />
  </div>
    </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-231-456-7689</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
            
            < p className="footer-copyright">
             2024 Tomato Web App. All rights reserved.

            </p>
        </div>
        <hr />
    </div>
  )
}

export default Footer
