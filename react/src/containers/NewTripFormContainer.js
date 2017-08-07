import React, { Component } from 'react';
import TinyDatePicker from 'tiny-date-picker'

class NewTripFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCity: '',
      newState: '',
      newDate: '',
      startDate: '',
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

  componentDidMount() {
    TinyDatePicker(document.querySelector('.startDate'), {
      onChangeDate: function (context) {
        // console.log(document.getElementById('startDate').value)
      },
    });
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
      newDate: '',
      startDate: ''
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let selectedDate = document.getElementById('startDate').value
    let formPayload = {
      city: this.state.newCity,
      state: this.state.newState,
      date: this.state.newDate,
      start_date: selectedDate
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

        <label onChange={this.handleChange}>Start Date
          <input
            type='text'
            className='startDate'
            id='startDate'
            name='startDate'
            value={this.state.startDate}
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

{/* <label onChange={this.handleChange}>Date
  <input
    name='newDate'
    type='text'
    value={this.state.newDate}
  />
</label> */}
