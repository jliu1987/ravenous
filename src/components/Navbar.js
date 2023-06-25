import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';


function Navbar() {

  return (
    <div className='navbar' >
      
        


            <Link to='/' className='home'>ravenous</Link>
            <Link to='/menu' className='menu'>Menu</Link>      
        

      


    </div>
  )
}

export default Navbar;
