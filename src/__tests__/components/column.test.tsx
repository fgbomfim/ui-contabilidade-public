import React from 'react';
import { render } from '@testing-library/react';
import Column from '../../components/column';

describe('@src/components/column', () => {
  it('should render', () => {
    const { container } = render(
      <Column>Column</Column>
    )

    expect(container).toBeDefined();
  })
});