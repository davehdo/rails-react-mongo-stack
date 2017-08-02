import SuggestedTile from '../../src/components/SuggestedTile';

describe('SuggestedTile', () => {
    let wrapper;
    let data = {
      name: 'Alden and Harlow',
      address: '40 Brattle St',
      city: 'Cambridge',
      state: 'MA',
      zip: '02138',
      url: 'https://aldenandharlow.com',
      image_url: 'https://aldenandharlow.com',
      rating: 4.5
    }

  beforeEach(() => {
    wrapper = mount(
      <SuggestedTile
        restaurant={data}
        addSuggested={() => {}}
      />
    );
  });

  it('should render an img tag', () => {
    expect(wrapper.find('img')).toBePresent();
  });

  it('should render two h6 tags', () => {
    expect(wrapper.find('h6')).toBePresent();
  });

  it('should render the name', () => {
    expect(wrapper.text()).toMatch('Alden and Harlow')
  })

  it('should render the rating', () => {
    expect(wrapper.text()).toMatch('Rating: 4.5')
  })

  it('should render a button tag', () => {
    expect(wrapper.find('button')).toBePresent();
  });

  it('should render a button tag with "Add" text', () => {
    expect(wrapper.find('button').text()).toBe('Add');
  });
});
