import React, { Component } from 'react';

class TripShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  // componentDidMount() {
  //   let tripId = this.props.params.id
  //   fetch(`/api/v1/trips/${tripId}`)
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({
  //       data: []
  //     })
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Trip Name</h1>
        <div>
          <h4>resturant 1</h4>
          <p>hours</p>
          <p>description</p>
        </div>
        <div>
          <h4>resturant 2</h4>
          <p>hours</p>
          <p>description</p>
        </div>
        <div>
          <h4>resturant 3</h4>
          <p>hours</p>
          <p>description</p>
        </div>


        <h2>suggested places</h2>
        <div>
          <h4>resturant 4</h4>
          <p>hours</p>
          <p>description</p>
        </div>
        <div>
          <h4>resturant 5</h4>
          <p>hours</p>
          <p>description</p>
        </div>
        <div>
          <h4>resturant 6</h4>
          <p>hours</p>
          <p>description</p>
        </div>

        <p>search by name/type of food</p>
        <form>
          <label></label>
          <input
            name='bakery'
            type='text'
          />
          <div className="button-group">
            <input className="button" type="submit" value="Submit" />
          </div>
        </form>

      </div>
    )
  }
}

export default TripShowContainer;
