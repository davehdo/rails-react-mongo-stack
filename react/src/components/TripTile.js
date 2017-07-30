import React from 'react';
import { Link } from 'react-router';

const TripTile = props => {
  return(
    <div className="small-12 medium-4 columns end">
      <div className="callout">

        <h3>{props.trip.name}</h3>
        
        <div className="image">
          <img src="pic03.jpg" alt=""/>
        </div>

        <div className="text-center">
          <Link className="button" to={`/trips/${props.trip.id}`}>Learn More</Link>
        </div>

      </div>
    </div>
  )
}

export default TripTile;
