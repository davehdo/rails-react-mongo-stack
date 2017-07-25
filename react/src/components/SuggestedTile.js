import React from 'react';

const SuggestedTile = props => {
  return(

    <div className="callout">
      <h4>{props.restaurant.name}</h4>
      <p>{props.restaurant.display_address[0]}</p>
      <p>{props.restaurant.display_address[1]}</p>
    </div>

  )
}

export default SuggestedTile;
