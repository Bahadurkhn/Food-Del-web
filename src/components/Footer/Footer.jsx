import React from 'react'
import "./Footer.css";
import assets from '../../assets/assets';
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" style={{width:"80px"}}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus beatae sit, dignissimos nostrum esse commodi facilis accusantium corrupti, natus neque officia mollitia ad, alias blanditiis? Nemo aliquid assumenda et.</p>
                <div className="footer-social-icon">
                  <img src={assets.FaceBook} alt="" style={{width:"37px"}} />
                  <img src={assets.Twitter} alt="" style={{width:"40px"}} />
                  <img src={assets.linkedin} alt="" style={{width:"30px"}} />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            copyright 2024 @ tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer
