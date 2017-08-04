import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

class NewTripFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCity: '',
      newState: '',
      newDate: '',
      stateOptions: ['AK','AL','AR','AZ','CA','CO','CT','DE','FL','GA','HI','IA','ID','IL',
        'IN','KS','KY','LA','MA','MD','ME','MI','MN','MO','MS','MT','NC','ND','NE','NH',
        'NJ','NM','NV','NY','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VA','VT',
        'WA','WI','WV','WY']
    }
    this.handleChange = this.handleChange.bind(this);
    // this.validate = this.validate.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({ [name]: value })
  }

  // validate(field) {
  //   if (field === '' || field === ' '){
  //     return false
  //   } else {
  //     return true
  //   }
  // }

  handleClearForm(event) {
    this.setState({
      newCity: '',
      newState: '',
      newDate: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      city: this.state.newCity,
      state: this.state.newState,
      date: this.state.newDate
    };
    this.props.addNewTrip(formPayload);
    this.handleClearForm(event);
  };

  render() {
    let stateElements = this.state.stateOptions.map (state => {
      return (
        <option key={state} value={state}>{state}</option>
      )
    })

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="column small-6">
            <label onChange={this.handleChange}>City
              <input
                name='newCity'
                type='text'
                value={this.state.newCity}
              />
            </label>
          </div>

          <div className="column small-6">
            <label>State
              <select name='newState' value={this.state.newState} onChange={this.handleChange}>
                <option value=''></option>
                {stateElements}
              </select>
            </label>
          </div>
        </div>

        <label onChange={this.handleChange}>Date
          <input
            name='newDate'
            type='text'
            value={this.state.newDate}
          />
        </label>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default NewTripFormContainer
