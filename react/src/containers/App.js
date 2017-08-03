import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import TripsIndexContainer from './TripsIndexContainer';
import TripShowContainer from './TripShowContainer';
import Topbar from '../components/Topbar';

const App = props => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={Topbar}>
        <IndexRoute component={TripsIndexContainer}/>
        <Route path='/trips' component={TripsIndexContainer}/>
        <Route path='/trips/:id' component={TripShowContainer}/>
      </Route>
    </Router>
  )
}

export default App;
