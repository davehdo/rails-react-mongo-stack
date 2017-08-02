import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import RestaurantTile from '../components/RestaurantTile';
import SuggestedTile from '../components/SuggestedTile';

class TripShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
      restaurants: [],
      suggested: [],
      search: ''
    }
    this.getRestaurants = this.getRestaurants.bind(this);
    this.getSuggested = this.getSuggested.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addSuggested = this.addSuggested.bind(this);
    this.handleRestaurantDelete = this.handleRestaurantDelete.bind(this);
    this.handleTripDelete = this.handleTripDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  componentDidMount() {
    this.getRestaurants()
    this.getSuggested()
  }

  getRestaurants() {
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        trip: body.trip,
        restaurants: body.restaurants
      })
    })
  }

  getSuggested() {
    fetch(`/yelp?tripId=${this.props.params.id}`,
      {
        method: 'GET',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then(response => response.json())
    .then(responseData => {
      this.setState({ suggested: responseData.businesses })
    })

    // let payload = {
    //   tripId: this.props.params.id
    // }
    // fetch(`/yelp`, {
    //     method: 'POST',
    //     credentials: 'same-origin',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(payload)
    //   }
    // )
    // .then(response => response.json())
    // .then(responseData => {
    //   this.setState({ suggested: responseData.businesses })
    // })
  }

  handleSearch(payload) {
    console.log(payload)

    fetch(`/yelp`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )
    .then(response => response.json())
    .then(responseData => {
      console.log(responseData)
    })


    // fetch(`/yelp?state=${}&city=${}`,
    //   {
    //     method: 'GET',
    //     credentials: 'same-origin',
    //     headers: { 'Content-Type': 'application/json' }
    //   }
    // )
    // .then(response => response.json())
    // .then(responseData => {
    //   console.log(responseData)
    //   this.setState({ yelpData: responseData })
    // })
  }

  addSuggested(payload) {
    payload.trip_id = this.props.params.id
    fetch(`/api/v1/restaurants`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )
    .then(response => response.json())
    .then(responseData => {
      this.setState({ restaurants: [...this.state.restaurants, responseData] })
    })
  }

  handleRestaurantDelete(payload) {
    let restaurantId = payload.id

    fetch(`/api/v1/restaurants/${restaurantId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(body => {
      let newRestaurants = this.state.restaurants.filter(restaurant => {
        return restaurant.id !== body.id
      })
      this.setState({ restaurants: newRestaurants })
    })
  }

  handleTripDelete() {
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(body => {
      this.props.router.push('/') //redirect to index
    })
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({ search: value })
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      search: ''
    })
  };

  handleSearchSubmit(event) {
    event.preventDefault();
    let formPayload = {
      trip_id: this.props.params.id,
      search: this.state.search
    }
    this.handleSearch(formPayload);
    this.handleClearForm(event);
  };

  render() {
    let restaurants = this.state.restaurants.map((restaurant, index) => {
      return (
        <RestaurantTile
          key={index}
          handleDelete={this.handleRestaurantDelete}
          restaurant={restaurant}
        />
      )
    })

    let suggested = this.state.suggested.map((restaurant, index) => {
      return (
        <SuggestedTile
          key={index}
          addSuggested={this.addSuggested}
          restaurant={restaurant}
        />
      )
    })

    return (
      <div>
        <h1>{this.state.trip.name}</h1>
        <p>{this.state.trip.city}, {this.state.trip.state}</p>

        {restaurants}

        <div id="suggested-container">
          <div className="row">
            {suggested}
          </div>
        </div>

        <div className="callout">
          <p>Search</p>
          <form onSubmit={this.handleSearchSubmit}>
            <label onChange={this.handleChange}>Name/Food Type
              <input
                name='search'
                type='text'
                value={this.state.search}
              />
            </label>

            <div className="button-group">
              <input className="button" type="submit" value="Submit" />
            </div>
          </form>
        </div>

        <Link to="/">Back</Link><br/>
        <Link onClick={this.handleTripDelete}>Delete Trip</Link>
      </div>
    )
  }
}

export default TripShowContainer;
