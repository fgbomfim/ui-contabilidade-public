import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import
  CardSolutionsBusiness, {
    CardSolutionsBusinessProps,
  } from "../../components/card-solutions-business";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const navigateMock = jest.fn();

describe('@src/components/card-solutions-business', () => {
  const cardSolutionsBusinessProps: CardSolutionsBusinessProps = {
    redirectTo: '/services',
    title: 'Card title',
    paragraph: 'Card paragraph',
    solutions: ['Solution 1', 'Solution 2', 'Solution 3'],
    image: 'static/media/services.44b3a26bf70dd1e99da8.png',
  }

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component <CardSolutionsBusiness />', () => {
    render(<CardSolutionsBusiness {...cardSolutionsBusinessProps} />);

    expect(screen.getByText(cardSolutionsBusinessProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardSolutionsBusinessProps.paragraph)).toBeInTheDocument();
    expect(screen.getByText(cardSolutionsBusinessProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardSolutionsBusinessProps.solutions[0])).toBeInTheDocument();
  });

  it('should render redirect when click in button', () => {
    render(<CardSolutionsBusiness {...cardSolutionsBusinessProps} />);

    screen.getByTestId('button-find-out-more').click();

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith(cardSolutionsBusinessProps.redirectTo);
  });
})