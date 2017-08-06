import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import RestaurantTile from '../components/RestaurantTile';
import SuggestedTile from '../components/SuggestedTile';
import SearchResultTile from '../components/SearchResultTile';

class TripShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: {},
      restaurants: [],
      suggested: [],
      search: '',
      searchResults: []
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
  }

  handleSearch(payload) {
    fetch(`/yelp`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }
    )
    .then(response => response.json())
    .then(responseData => {
      this.setState({ searchResults: responseData.businesses})
    })
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

    let searchResults = this.state.searchResults.map((restaurant, index) => {
      return (
        <SearchResultTile
          key={index}
          addRestaurant={this.addSuggested}
          restaurant={restaurant}
        />
      )
    })

    return (
      <div>
        <div className="trip-title">
          <h2>{this.state.trip.city}, {this.state.trip.state}</h2>
          <p>{this.state.trip.date}</p>
        </div>

        <div id="saved-container">
          <div className="row">
            {restaurants}
          </div>
        </div>



        <div id="search-form" className="column">
          <div className="row">

            <div className="column small-6">
              <div className="row">

                <form onSubmit={this.handleSearchSubmit}>
                  <div className="column small-10">
                    <label onChange={this.handleChange}>
                      <input
                        placeholder="Search"
                        name='search'
                        type='text'
                        value={this.state.search}
                      />
                    </label>
                  </div>
                  <div className="column small-2">
                    <div className="button-group">
                      <input type="submit" className="fa fa-search" value="&#xf002;" />
                    </div>
                  </div>
                </form>

              </div>

              <div className="row">
                {searchResults}
              </div>
            </div>

            <div>
              <p>map</p>
            </div>

          </div>
        </div>

        <div id="suggested-container">
          <div className="row">
            <h4>Suggestions</h4>
            {suggested}
          </div>
        </div>


        <Link data-confirm="Are you sure?" onClick={this.handleTripDelete}>Delete Trip</Link>
      </div>
    )
  }
}

export default TripShowContainer;
