import React , { useState }from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/pizzaLogo.png';
import '../styles/Navbar.css';
import MenuIcon from '../assets/menuOpen.png';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo}/>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
        
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
        <button className='icon' onClick={toggleNavbar}>
          <img src={MenuIcon} alt="icon" />
        </button>
        
        
      </div>

    </div>
  )
}

export default Navbar;
