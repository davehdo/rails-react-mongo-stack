import React from 'react';
import { Link } from 'react-router';

const TripTile = props => {
  return(
    <div className="small-12 medium-4 columns">
      <div className="callout secondary">
        <h3>{props.trip.name}</h3>
        <p>{props.trip.city}, {props.trip.state}</p>
        <div className="text-center">
          <Link className="button" to={`/trips/${props.trip.id}`}>Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default TripTile;
