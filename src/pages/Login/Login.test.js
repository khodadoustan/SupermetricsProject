import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';

describe('rendering Login component', () => {
  it('renders PostItem component without crashing', () => {
    shallow(<BrowserRouter><Login/></BrowserRouter>);
  });
});
