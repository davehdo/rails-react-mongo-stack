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
      <h4>{props.name}</h4>
      <p>{props.address}</p>
      <p>{props.city}, {props.state} {props.zip}</p>
      <button onClick={handleRestaurantDelete}>Delete</button>
    </div>
  )
}

export default RestaurantTile;
