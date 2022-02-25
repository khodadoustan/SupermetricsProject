import { mount, shallow } from 'enzyme';
import TextField from './TextField';

describe('rendering TextField component', () => {
  it('renders PostItem component without crashing', () => {
    shallow(<TextField name='test' onChange={(e) => {}} title='test' />);
  });

  it('should have input with specific name', () => {
    const wrapper = mount(
      <TextField name='test' onChange={(e) => {}} title='test' />
    );
    expect(wrapper.find('input').prop('name')).toEqual('test');
  });

  it('should show error on error field', () => {
    const wrapper = mount(
      <TextField name='test' onChange={(e) => {}} title='test' error="Test error" />
    );
    expect(wrapper.find('.TextBoxError').text()).toEqual('Test error');
  });
});
