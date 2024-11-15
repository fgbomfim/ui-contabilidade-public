import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export interface CardSolutionsBusinessProps {
  redirectTo: string;
  title: string;
  paragraph: string;
  solutions: string[];
  image: string;
}

export default function CardSolutionsBusiness({
  redirectTo,
  title,
  paragraph,
  solutions,
  image,
  ...rest
}: CardSolutionsBusinessProps) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(redirectTo);
  };

  return (
    <Card {...rest}>
      <Image src={image} />
      <Infos>
        <H2>{title}</H2>

        <p>{paragraph}</p>

        <Ul>
          {solutions.map(solution => (
            <li key={solution}>{solution}</li>
          ))}
        </Ul>
      </Infos>

      <Links>
        <Button
          onClick={redirect}
          data-testid="button-find-out-more"
        >
          Saiba mais ...
        </Button>
      </Links>
    </Card>
  );
}

const Card = styled.div`
  width: 365px;
  height: 417px;
  background-color: #1E3A58;
`;

const Image = styled.img`
  width: 100%;
`;

const H2 = styled.h2`
  font-size: 24px;
  color: var(--platinum);
  text-align: center;
  width: 100%;
  padding: 0px 0px 30px;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 16px 20px;
  height: 200px;
`;

const Ul = styled.ul`
  list-style: numeric;
  width: 100%;
  padding: 10px 25px;
`;

const Links = styled.div`
  display: flex;
  width: 100%;
  text-align: right;
  align-items: flex-end;
  padding: 20px 20px 0px;
  justify-content: right;
`;

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: var(--platinum);
`;