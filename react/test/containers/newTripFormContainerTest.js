import NewTripFormContainer from '../../src/containers/NewTripFormContainer'

fdescribe('NewTripFormContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NewTripFormContainer
      />
    );
  });

  it('should pass', () => {
    expect(true).toBe(true);
  });

  it('should set the state to ""', () => {
    // set initial state
    let state = {newCity: "Chicago", newState: "IL", newDate: "10/20/18"}
    wrapper.setState( state )
    // create an event object to pass into handleClearForm
    let event = jasmine.createSpyObj('event', ['preventDefault'])
    let newState = {
      newCity: '',
      newState: '',
      newDate: '',
      startDate: '',
      stateOptions: ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
    }

    wrapper.instance().handleClearForm(event)
    console.log(wrapper.state())
    expect(wrapper.state()).toEqual(newState)
  });
});
