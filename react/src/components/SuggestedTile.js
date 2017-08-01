import React from 'react';

const SuggestedTile = props => {

  let handleAddClick = (event) => {
    let payload = {
      name: props.name,
      address: props.address,
      city: props.city,
      state: props.state,
      zip: props.zip,
      url: props.url,
      image_url: props.image_url
    };
    props.addSuggested(payload)
  };

  return(
    <div className="small-6 medium-4 large-2 columns end">
      <div className="callout">

        <div className="circle">
          <img src={props.image_url} alt={props.name} />
        </div>

        <h6>{props.name}</h6>

        <button type="button" onClick={handleAddClick}>Add</button>

      </div>
    </div>

  )
}

export default SuggestedTile;
