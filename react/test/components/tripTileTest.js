import TripTile from '../../src/components/TripTile';

describe('TripTile', () => {
  let wrapper,
    id,
    name,
    handleTripDelete;

  beforeEach(() => {
    wrapper = mount(
      <TripTile
        id={1}
        city='Boston'
        addSuggested={() => {}}
      />
    );
  });

  it('should render an h3 tag', () => {
    expect(wrapper.find('h3')).toBePresent();
  });

  it('should render a h3 tag with city property value', () => {
    expect(wrapper.find('h3').text()).toBe('Boston');
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });

  it('should render a Link tag', () => {
    expect(wrapper.find('Link')).toBePresent();
  });

  it('should render a Link tag with "View" text', () => {
    expect(wrapper.find('Link').text()).toBe('View');
  });
});
