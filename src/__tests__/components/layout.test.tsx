import { render } from "@testing-library/react";
import Layout from "../../components/layout";
import { BrowserRouter } from "react-router-dom";

describe('@src/components/layout', () => {
  it('should render', () => {
    const { container } = render(
      <BrowserRouter>
        <Layout page="home">Layout</Layout>
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });
});