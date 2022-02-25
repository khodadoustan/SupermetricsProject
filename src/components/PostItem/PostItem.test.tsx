import { mount, shallow } from 'enzyme';
import PostItem from './PostItem';

const testPostItem = {
  date: '2022-02-20T23:36:09+00:00',
  text: 'This is a test description for post.',
};

describe('rendering PostItem component', () => {
  it('renders PostItem component without crashing', () => {
    shallow(<PostItem date={testPostItem.date} text={testPostItem.text} />);
  });

  it('Show text as we expected', () => {
    const wrapper = mount(
      <PostItem date={testPostItem.date} text={testPostItem.text} />
    );
    expect(wrapper.find('.PostItemDesc').text()).toBe(testPostItem.text)
  });
  
  it('Show date as we expected', () => {
    const wrapper = mount(
      <PostItem date={testPostItem.date} text={testPostItem.text} />
    );
    expect(wrapper.find('.PostItemDate').text()).toBe(new Date(testPostItem.date).toLocaleString())
  });
});
