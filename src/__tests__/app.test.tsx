import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

describe('App component', () => {
  it('should render', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});