import { render } from '@testing-library/react';
import './config/tests/setupTests';
import App from './App';

describe('<App />', () => {
    test('should render', () => {
        render(<App />);
    });
});
