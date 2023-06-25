import React from 'react'
function MenuItem({ name, image, address, city, state, zipcode, category, rating, reviewCount }) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <div className='detail'>
        <ul className='leftSide'>
          <li>{address}</li>
          <li>{city}</li>
          <li>{state} {zipcode}</li>      
        </ul>
        <ul className='rightSide'>
          <li><h2>{category}</h2></li>
          <li className='rating'>{rating} stars</li>
          <li>{reviewCount} reviews</li>
        </ul>
      </div>
      

    </div>
  )
}

export default MenuItem;
