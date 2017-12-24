import TripsIndexContainer from '../../src/containers/TripsIndexContainer';
import TripTile from '../../src/components/TripTile';
import NewTripFormContainer from '../../src/containers/NewTripFormContainer'

describe('TripsIndexContainer', () => {
  let wrapper;

  beforeEach(() => {
    spyOn(TripsIndexContainer.prototype, 'componentDidMount')

    wrapper = shallow(
      <TripsIndexContainer
      />
    );
  });

  describe('banner', () => {
    it('should render a h1 tag with the title', () => {
      expect(wrapper.find('h1')).toBePresent();
      expect(wrapper.find('h1').text()).toBe('Rails React Stack');
    });

    it('should render a p tag with the description', () => {
      expect(wrapper.find('p')).toBePresent();
      expect(wrapper.find('p').text()).toBe('An app for traveling food lovers');
    });

    it('should render a section tag with id of "banner"', () => {
      expect(wrapper.find('section#banner')).toBePresent();
    })

    it('should render an a tag with class of "more" and "scrolly"', () => {
      expect(wrapper.find('a.more.scrolly')).toBePresent();
    })
  })

  describe('TripTile fragment', () => {
    beforeEach(() => {
      let trips = [{id: 1, city: "Chicago"}, {id: 2, city: "boston"}]
      wrapper.setState({ trips: trips })
    });

    it('should render a TripTile for every trip in state', () => {
      expect(wrapper.find(TripTile).length).toEqual(2)
    })

    it('should render a TripTile with correct props', () => {
      expect(wrapper.find(TripTile).first().props()).toEqual({id: 1, city: "Chicago"})
    })
  });

  describe('new trip form section', () => {
    it('should render a h3 tag with the "Where are you traveling?" header', () => {
      expect(wrapper.find('h3')).toBePresent();
      expect(wrapper.find('h3').text()).toBe('Where are you traveling?');
    });

    it('should render a NewTripFormContainer', () => {
      expect(wrapper.find(NewTripFormContainer)).toBePresent
    })
  });
});
