import React, { useState } from 'react'
import BannerImage from '../assets/bannerImage.jpg';
import '../styles/Searchbar.css';
import { MenuList } from '../helpers/MenuList';

function Searchbar() {
    const [businessName, setBusinessName] = useState('');
    const [location, setLocation] = useState('');
    const [sortOption, setSortOption] = useState('bestMatch'); // Default sorting option
  
    const handleBusinessNameChange = (event) => {
      setBusinessName(event.target.value);
    };
  
    const handleLocationChange = (event) => {
      setLocation(event.target.value);
    };
  
    const handleSortOptionChange = (event) => {
      setSortOption(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      performSearch(businessName, location, sortOption);
    };

    const performSearch = (businessName, location, sortOption) => {
    // Assuming you have an array of search results called 'data'
    let searchResults = [...MenuList];
  
    // Filter search results based on user input
    if (businessName) {
      searchResults = searchResults.filter(
        (result) => result.name.toLowerCase().includes(businessName.toLowerCase())
      );
    }
  
    if (location) {
        searchResults = searchResults.filter(
          (result) => {
            const { address, city, state, zipcode } = result.location;
            const locationString = `${address} ${city} ${state} ${zipcode}`;
            return locationString.toLowerCase().includes(location.toLowerCase());
          }
        );
      }
  
    // Sort search results based on the selected criteria
    if (sortOption === 'bestMatch') {
      // Implement your logic for best match sorting (e.g., relevance, distance, etc.)
      searchResults.sort((a, b) => {
        // ...
      });
    } else if (sortOption === 'highestRated') {
      searchResults.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === 'mostReviewed') {
      searchResults.sort((a, b) => b.reviewCount - a.reviewCount);
    }
  
    // Display the sorted search results
    console.log(searchResults);
  };
  

  return (
    <div className='searchbar' style={{backgroundImage: `url(${BannerImage})`}}  >
     <form onSubmit={handleSubmit}>
     <div className='sorting'>
     <select value={sortOption} onChange={handleSortOptionChange}>
        <option value="bestMatch">Best Match</option>
        <option value="highestRated">Highest Rated</option>
        <option value="mostReviewed">Most Reviewed</option>
      </select>
     </div>
     
     
      <input
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={handleBusinessNameChange}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={handleLocationChange}
      />
   

      <button type="submit">Let's Go</button>
    </form>
       


    </div>
  )
}

export default Searchbar;