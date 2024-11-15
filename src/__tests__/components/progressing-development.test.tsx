import { render, screen } from "@testing-library/react";
import ProgressingDevelopment from "../../components/progressing-development";

describe('@src/components/progressing-development', () => {
  it('should render <ProgressingDevelopment />', () => {
    render(<ProgressingDevelopment />);
    expect(screen.getByTestId('progressing-development-image')).toBeInTheDocument();
  });
});