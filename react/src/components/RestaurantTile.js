import React from 'react';

const RestaurantTile = props => {

  let handleRestaurantDelete = (event) => {
    let payload = {
      id: props.restaurant.id
    };
    props.handleDelete(payload)
  };

  return(
    <div className="column small-12 medium-6 end">
      <div className="callout saved">
        <div className="row">
          <div className="column small-5">
            <img src={props.restaurant.image_url} alt={props.restaurant.name} />
          </div>
          <div className="column small-7 inner">
            <h4>{props.restaurant.name}</h4>
            <p>{props.restaurant.address}<br/>
            {props.restaurant.city}, {props.restaurant.state} {props.restaurant.zip}</p>
            <a href={props.restaurant.url}>Learn More</a><br/>
            <div className="delete"><a onClick={handleRestaurantDelete}>Delete</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestaurantTile;
