import SearchResultTile from '../../src/components/SearchResultTile';

describe('SearchResultTile', () => {
  let wrapper,
      restaurant,
      addSuggested;

  restaurant = {
    name: 'restaurant',
    location: {
      address1: '123 Milk Street',
      city: 'Boston',
      state: 'MA',
      zip_code: 12345
    },
    url: 'https://www.restaurant.com',
    image_url: 'https://www.image.com/image',
    coordinates: {
      latitude: 1234,
      longitude: 1234
    },
    rating: 4
  }

  beforeEach(() => {
    addSuggested = jasmine.createSpy('addSuggested spy');
    wrapper = mount(
      <SearchResultTile
        addRestaurant={addSuggested}
        restaurant={restaurant}
      />
    );
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'https://www.image.com/image',
      alt: 'restaurant'
    });
  });

  it('should render an h6 tag', () => {
    expect(wrapper.find('h6')).toBePresent();
  });

  it('should render an h6 tag with the text property value', () => {
    expect(wrapper.find('h6').text()).toBe('restaurant');
  });

  it('should render an p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render an p tag with the text property value', () => {
    expect(wrapper.find('p').text()).toBe('Rating: 4');
  });

  it('should render an a tag', () => {
    expect(wrapper.find('a')).toBePresent();
  });

  it('should invoke the addSuggested function from props when clicked', () => {
    wrapper.find('button').simulate('click');
    expect(addSuggested).toHaveBeenCalled();
  });
});
