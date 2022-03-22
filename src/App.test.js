import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const pElement = screen.getByText(/I have updated App.js./i);
  expect(pElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const pElement = screen.getByText(/I have updated App.js./i);
  expect(pElement).toBeInTheDocument();
});
