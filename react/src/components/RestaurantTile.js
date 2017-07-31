import React from 'react';

const RestaurantTile = props => {

  let handleRestaurantDelete = (event) => {
    let payload = {
      id: props.id
    };
    props.handleDelete(payload)
  };

  return(
    <div className="callout">
      <h4>{props.restaurant.name}</h4>
      <p>{props.restaurant.address}</p>
      <p>{props.restaurant.city}, {props.restaurant.state} {props.restaurant.zip}</p>
      <button onClick={handleRestaurantDelete}>Delete</button>
    </div>
  )
}

export default RestaurantTile;
