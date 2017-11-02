import Footer from '../../src/components/Footer';

describe('Footer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Footer
      />
    );
  });

  it('should render a p tag', () => {
    expect(wrapper.find('p')).toBePresent();
  });

  it('should render a p tag with the github path', () => {
    expect(wrapper.find('p').nodes[0].innerHTML).toBe('github.com/laurado');
  });

  it('should render a i tag with the github class', () => {
    expect(wrapper.find('i.fa-github')).toBePresent();
  });

  it('should render a p tag with the LinkedIn path', () => {
    expect(wrapper.find('p').nodes[1].innerHTML).toBe('linkedin.com/in/laura-do');
  });

  it('should render a i tag with the LinkedIn class', () => {
    expect(wrapper.find('i.fa-linkedin-square')).toBePresent();
  });
});
