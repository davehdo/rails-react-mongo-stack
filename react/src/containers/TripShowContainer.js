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
    this.loadMap = this.loadMap.bind(this);
    this.loadMarkers = this.loadMarkers.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.removeMarker = this.removeMarker.bind(this);
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

  loadMap() {
    this.map = new google.maps.Map(this.refs.mapContainer, {
      center: {lat: this.state.trip.lat, lng: this.state.trip.lon},
      zoom: 10
    });
    this.loadMarkers()
  }

  loadMarkers() {
    this.markers = []
    this.state.restaurants.map((restaurant) => {
      let marker = new google.maps.Marker({
        position: {lat: restaurant.lat, lng: restaurant.lon},
        map: this.map,
        title: restaurant.name,
        id: restaurant.id
      });
      this.markers.push(marker)
    })
  }

  addMarker(newRestaurant) {
    let marker = new google.maps.Marker({
      position: {lat: newRestaurant.lat, lng: newRestaurant.lon},
      map: this.map,
      title: newRestaurant.name,
      id: newRestaurant.id
    });
    this.markers.push(marker)
  }

  removeMarker(removedRestaurant) {
    let removedMarker = this.markers.find(marker => {
      return marker.id === removedRestaurant.id
    })
    removedMarker.setMap(null);
    removedMarker = null;
  }

  getRestaurants() {
    let tripId = this.props.params.id
    fetch(`/api/v1/trips/${tripId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({
        trip: body.trip,
        restaurants: body.restaurants
      }, this.loadMap)
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
      this.addMarker(responseData)
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
      this.removeMarker(body)
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
          <h1>{this.state.trip.city}, {this.state.trip.state}</h1>
          <p>{this.state.trip.date}</p>
          <Link className="delete" data-confirm="Are you sure?" onClick={this.handleTripDelete}>Delete Trip</Link>
        </div>

        <div id="saved-container">
          <div className="row">
            {restaurants}
          </div>
        </div>

        <div id="search-form">
          <div className="row">

            <div className="column small-12 medium-6">
              <div id="map" ref="mapContainer"></div>
            </div>

            <div className="column small-12 medium-6">
              <div className="row">
                <form onSubmit={this.handleSearchSubmit}>
                  <div className="column small-10 search-field">
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

          </div>
        </div>

        <div id="suggested-container">
          <div className="row">
            <h4>Popular suggestions in {this.state.trip.city}</h4>
            {suggested}
          </div>
        </div>




      </div>
    )
  }
}

export default TripShowContainer;
