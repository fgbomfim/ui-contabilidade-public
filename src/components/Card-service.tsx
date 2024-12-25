import styled from "styled-components";

export interface CardServiceProps {
  title: string;
  paragraph: string;
  image: string;
}

export default function CardService({ title, paragraph, image, ...rest }: CardServiceProps) {
  return (
    <Card {...rest}>
      <Image src={image} />
      <Infos>
        <H2>{title}</H2>

        <P>{paragraph}</P>
      </Infos>
    </Card>
  )
}

const Card = styled.div`
  width: 365px;
  height: 350px;
  background-color: #1E3A58;

  @media (max-width: 580px) {
    width: 100%;
    margin-bottom: 20px;
  }
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
  width: 100%;
  padding: 16px 20px;
  height: 200px;
  text-align: center;
`;

const P = styled.p`
  color: var(--platinum);
`;
