import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';

describe('rendering Dashboard component', () => {
  it('renders PostItem component without crashing', () => {
    shallow(<BrowserRouter><Dashboard/></BrowserRouter>);
  });
});
