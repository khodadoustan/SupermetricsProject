import { mount, shallow } from 'enzyme';
import UserItem from './UserItem';

const testUserItem = {
  userName: 'Test Robin',
  count: 20
};

describe('rendering PostItem component', () => {
  it('renders UserItem component without crashing', () => {
    shallow(<UserItem userName={testUserItem.userName} count={testUserItem.count} onClick={()=>{}} />);
  });

  it('Show user name as we expected', () => {
    const wrapper = mount(
      <UserItem userName={testUserItem.userName} count={testUserItem.count} onClick={()=>{}} />
    );
    expect(wrapper.find('h3').text()).toBe(testUserItem.userName)
  });
  
});
