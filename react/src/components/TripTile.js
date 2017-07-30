import React from 'react';
import { Link } from 'react-router';

const TripTile = props => {

  return(
    <div className="small-12 medium-4 columns end">
      <div className="callout">

        <h3>{props.trip.name}</h3>

        <img src="pic03.jpg" alt=""/>

        <div className="text-center">
          <Link className="button" to={`/trips/${props.trip.id}`}>View</Link>
        </div>

      </div>
    </div>
  )
}

export default TripTile;
