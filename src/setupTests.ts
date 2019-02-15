import './types/modules.d';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React configuration
configure({ adapter: new Adapter() });
