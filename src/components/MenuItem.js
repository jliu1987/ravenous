import React from 'react'
function MenuItem({ name, image, address, city, state, zipcode, category, rating, reviewCount }) {
  return (
    <div className='menuItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <div className='leftSide'>
        <p>{address}</p><br/>
        <p>{city}</p><br/>
        <p>{state} {zipcode}</p>
      </div>
      <div className='rightSide'>
        <h2>{category}</h2>
        <p>{rating} stars</p><br/>
        <p>{reviewCount} reviews</p>
      </div>
    </div>
  )
}

export default MenuItem;
