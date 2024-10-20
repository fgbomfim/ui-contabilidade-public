import { render } from "@testing-library/react";
import Footer from "../../compositions/footer";

describe('@src/compositions/footer', () => {
  it('should render', () => {
    const { container } = render(<Footer />);
      
    expect(container).toBeInTheDocument();
  })
});
