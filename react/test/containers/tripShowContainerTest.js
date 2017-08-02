import TripShowContainer from '../../src/containers/TripShowContainer';
import RestaurantTile from '../../src/components/RestaurantTile';
import SuggestedTile from '../../src/components/SuggestedTile';

  describe('TripShowContainer', () => {
    let wrapper;

    beforeEach(() => {
      spyOn(TripShowContainer.prototype, 'componentDidMount')
      wrapper = mount(
        <TripShowContainer
          params={{id: 1}}
        />
      );
    });

    // it('should have initial state', () => {
    //   expect(wrapper.state()).toEqual({trip: {},restaurants: [], suggested: []})
    // })

    describe('It should render trip information', () => {

      beforeEach(() => {
        let trip = {id: 1, name: "Chicago", city: "Chicago", state: "IL"}
        wrapper.setState({ trip: trip })
      });

      it('should render the trip name', () => {
        expect(wrapper.text()).toMatch('Chicago')
      })

      it('should render the trip state', () => {
        expect(wrapper.text()).toMatch('IL')
      })
    });
  });
