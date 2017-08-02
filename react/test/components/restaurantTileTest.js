import RestaurantTile from '../../src/components/RestaurantTile';

describe('RestaurantTile', () => {
  let wrapper;
  let data = {
    id: 1,
    name: 'Alden and Harlow',
    address: '40 Brattle St',
    city: 'Cambridge',
    state: 'MA',
    zip: '02138'
  }

  beforeEach(() => {
    wrapper = mount(
      <RestaurantTile
        handleDelete={() => {}}
        restaurant={data}
      />
    );
  });

  it('should render a h4 tag', () => {
    expect(wrapper.find('h4')).toBePresent();
  });

  it('should render a h4 tag with the name property value', () => {
    expect(wrapper.find('h4').text()).toBe('Alden and Harlow');
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render the address property value', () => {
    expect(wrapper.text()).toMatch('40 Brattle St')
  });

  it('should render the city property value', () => {
    expect(wrapper.text()).toMatch('Cambridge')
  });

  it('should render the state property value', () => {
    expect(wrapper.text()).toMatch('MA')
  });

  it('should render the state property value', () => {
    expect(wrapper.text()).toMatch('MA')
  });

  it('should render the zip property value', () => {
    expect(wrapper.text()).toMatch('02138')
  });
});
