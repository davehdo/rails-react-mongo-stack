import React from 'react';

const SuggestedTile = props => {
  return(
    <div className="small-6 medium-4 large-2 columns end">
      <div className="callout">

        <div className="circle">
          <img src={props.restaurant.image_url} alt={props.restaurant.name} />
        </div>

        <h6>{props.restaurant.name}</h6>

        <button type="button" onClick={props.addSuggested}>Add</button>

      </div>
    </div>

  )
}

export default SuggestedTile;
