import { render, screen } from '@testing-library/react';

import Gallery from '../../components/gallery';
import { SLIDERS } from '../../constants/app';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('Gallery component', () => {
  it('renders without throwing an error', () => {
    const { container } = render(<Gallery />);
    expect(container).toMatchSnapshot();
  });

  it('renders the correct number of sliders', () => {
    render(<Gallery />);
    expect(screen.queryAllByRole('slider')).toHaveLength(SLIDERS.length);
  });
});