import React from 'react';

const SuggestedTile = props => {
  return(

    <div className="callout">
      <img src={props.restaurant.image_url} alt={props.restaurant.name} height="42" width="42"/>
      <h4>{props.restaurant.name}</h4>
    </div>

  )
}

export default SuggestedTile;
