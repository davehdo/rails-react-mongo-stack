import Topbar from '../../src/components/Topbar';

describe('Topbar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Topbar
      />
    )
  })

  it('should render the text Edit Profile', () => {
    expect(wrapper.text()).toMatch('Edit Profile')
  })

  it('should render a Link tag', () => {
    expect(wrapper.find('Link')).toBePresent();
  });
})
