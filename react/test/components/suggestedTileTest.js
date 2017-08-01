import SuggestedTile from '../../src/components/SuggestedTile';

describe('SuggestedTile', () => {
  let wrapper,
    id,
    name,
    address,
    city,
    state,
    zip,
    handleDelete;

  beforeEach(() => {
    wrapper = mount(
      <SuggestedTile
        name='Alden and Harlow'
        rating={4}
        addressTop='40 Brattle St'
        addressBottom='Cambridge, MA 02138'
        address='40 Brattle St'
        city='Cambridge'
        state='MA'
        zip='02138'
        url='https://aldenandharlow.com'
        image_url='https://image.com'
        addSuggested={() => {}}
      />
    );
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });

  it('should render a h6 tag', () => {
    expect(wrapper.find('h6')).toBePresent();
  });

  it('should render a h6 tag with the name property value', () => {
    expect(wrapper.find('h6').text()).toBe('Alden and Harlow');
  });

  it('should render a button tag', () => {
    expect(wrapper.find('button')).toBePresent();
  });

  it('should render a button tag with "Add" text', () => {
    expect(wrapper.find('button').text()).toBe('Add');
  });
});
