import React from 'react'
import '../styles/Footer.css';
import Instagram from '../assets/instagramIcon.png';
import Facebook from '../assets/facebookIcon.png';
import Twitter from '../assets/twiterIcon.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
      
            <Link to={{ pathname: "https://instagram.com" }} target="_blank"><img src={Instagram}/></Link>
            <Link to={{ pathname: "https://facebook.com" }} target="_blank"><img src={Facebook}/></Link>
            <Link to={{ pathname: "https://twitter.com" }} target="_blank"><img src={Twitter}/></Link>           
            
      </div>
      <p>&copy;2023 ravenous.com</p>
    </div>
  )
}

export default Footer