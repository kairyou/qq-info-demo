import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { title } from 'config';

test('renders title', () => {
  render(<App />);
  const reg = new RegExp(title);
  const linkElement = screen.getByText(reg);
  expect(linkElement).toBeInTheDocument();
});
