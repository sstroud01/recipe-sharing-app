import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders app component', () => {
  render(<App />);
  expect(screen.getByText('🍳 Recipe Sharing App')).toBeInTheDocument();
});