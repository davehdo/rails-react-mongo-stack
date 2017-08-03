import React from 'react';

const RestaurantTile = props => {

  let handleRestaurantDelete = (event) => {
    let payload = {
      id: props.restaurant.id
    };
    props.handleDelete(payload)
  };

  return(
    <div className="column small-12 medium-6 large-4 end">
      <div className="callout saved">

          <img src={props.restaurant.image_url} alt={props.restaurant.name} />

        <h4>{props.restaurant.name}</h4>
        <p>{props.restaurant.address}<br/>
        {props.restaurant.city}, {props.restaurant.state} {props.restaurant.zip}</p>
        <a href={props.restaurant.url}>Learn More</a><br/>
        <a onClick={handleRestaurantDelete}>Delete</a>
      </div>
    </div>
  )
}

export default RestaurantTile;
