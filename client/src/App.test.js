import { render, screen } from '@testing-library/react';
import App from './App';

test('renders books', () => {
  render(<App />);
  const linkElement = screen.getByText(/book list/i);
  expect(linkElement).toBeInTheDocument();
});
