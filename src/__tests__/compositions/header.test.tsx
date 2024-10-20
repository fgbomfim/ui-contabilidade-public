import { render } from "@testing-library/react";
import Header from "../../compositions/header";
import { BrowserRouter, MemoryRouter, useNavigate } from "react-router-dom";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const navigateMock = jest.fn();

describe('@src/compositions/header', () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const {container} = render(
      <BrowserRouter>
        <Header page="home" />
      </BrowserRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it('calls window.open with the correct URL', () => {
    const jsdomOpen = window.open;
    window.open = jest.fn();

    const spy = jest.spyOn(window, 'open');
    const { getByTestId } = render(
      <BrowserRouter>
        <Header page="home" />
      </BrowserRouter>
    );

    const button = getByTestId('header-anchor-whatsapp');

    button.click();
    
    expect(spy).toHaveBeenCalledWith('https://api.whatsapp.com/send?phone=5511952086786');
  });

  it('calls navigate to home', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header page="about-us" />
      </BrowserRouter>
    );
    const button = getByTestId('header-button-home');
    button.click();
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/');
  });

  it('calls navigate to about-us', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header page="services" />
      </BrowserRouter>
    );
    const button = getByTestId('header-anchor-about-us');
    button.click();
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/about-us');
  });

  it('calls navigate to services', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header page="contact" />
      </BrowserRouter>
    );
    const button = getByTestId('header-anchor-services');
    button.click();
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/services');
  });

  it('calls navigate to contacts', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header page="home" />
      </BrowserRouter>
    );
    const button = getByTestId('header-anchor-contacts');
    button.click();
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('/contacts');
  });

  it('does not throw an error when called with valid path', () => {
    const path = '/test-path';
    const { getByTestId } = render(
      <MemoryRouter>
        <Header page="test-page" />
      </MemoryRouter>
    );
    const button = getByTestId('header-button-home');
    expect(() => button.click()).not.toThrow();
  });

});