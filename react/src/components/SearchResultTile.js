import React from 'react';

const SearchResultTile = props => {

  let handleAddClick = (event) => {
    let payload = {
      name: props.restaurant.name,
      address: props.restaurant.location.address1,
      city: props.restaurant.location.city,
      state: props.restaurant.location.state,
      zip: props.restaurant.location.zip_code,
      url: props.restaurant.url,
      image_url: props.restaurant.image_url,
      lat: props.restaurant.coordinates.latitude,
      lon: props.restaurant.coordinates.longitude
    };
    props.addRestaurant(payload)
  };

  return(
    <div className="small-12 medium-6 large-4 columns end">
      <div className="callout search-result-tile">

        <div className="search-img">
          <img src={props.restaurant.image_url} alt={props.restaurant.name} />
        </div>

        <div className="search-inner">
          <h6>{props.restaurant.name}</h6>
          <p>Rating: {props.restaurant.rating}</p>

          <div className="add-container">
            <a href={props.restaurant.url} target="_blank">Learn More</a><br/>
            <button type="button" onClick={handleAddClick}>Add</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default SearchResultTile;
