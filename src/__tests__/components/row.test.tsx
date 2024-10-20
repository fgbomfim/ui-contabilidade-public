import { render } from "@testing-library/react";
import Row from "../../components/row";

describe('@src/components/row', () => {
  it('should render', () => {
    const { container } = render(
      <Row>Row</Row>
    )

    expect(container).toBeInTheDocument();
  })
});