import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';
function Menu() {
  return (
    <div className='menu'>
       { MenuList .map((menuItem,key)=>{
          return <MenuItem key={key}
                          name={menuItem.name} 
                          image={menuItem.image} 
                          address={menuItem.address} 
                          city={menuItem.city} 
                          state={menuItem.state} 
                          zipcode={menuItem.zipcode} 
                          category={menuItem.category} 
                          rating={menuItem.rating} 
                          reviewCount={menuItem.reviewCount}/>;
       })};
      
    </div>
  )
}

export default Menu
