import React from 'react';

const SuggestedTile = props => {

  let handleAddClick = (event) => {
    let payload = {
      name: props.restaurant.name,
      address: props.restaurant.location.address1,
      city: props.restaurant.location.city,
      state: props.restaurant.location.state,
      zip: props.restaurant.location.zip_code,
      url: props.restaurant.url,
      image_url: props.restaurant.image_url
    };
    props.addSuggested(payload)
  };

  return(
    <div className="small-6 medium-4 large-2 columns end">
      <div className="callout">

        <div className="circle">
          <img src={props.restaurant.image_url} alt={props.restaurant.name} />
        </div>

        <h6>{props.restaurant.name}</h6>
        <h6>Rating: {props.restaurant.rating}</h6>
        <a href={props.restaurant.url}>Learn More</a><br/>

        <button type="button" onClick={handleAddClick}>Add</button>

      </div>
    </div>

  )
}

export default SuggestedTile;
