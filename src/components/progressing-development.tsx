import styled from "styled-components";
import Column from "./column";
import InDevelopment from '../assets/image/progressing-development.png';

export default function ProgressingDevelopment() {
  return (
    <Column>
      <Main>
        <Image data-testid="progressing-development-image" src={InDevelopment} />
      </Main>
    </Column>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding: 50px 0px;
  background-color: var(--oxford-blue-3);
`;

const Image = styled.img`
  width: 700px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;