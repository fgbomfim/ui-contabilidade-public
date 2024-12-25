import styled from "styled-components";
import Column from "../components/column";
import Layout from "../components/layout";

export default function AboutUs() {
  return (
    <Layout page="about-us">
      <Column>
        <Main>
          <Title><i className="fa-solid fa-building" />Quem somos</Title>
          <P>
            A HS Bomfim Contabilidade é uma empresa moderna, fundada por
            profissionais contábeis em parceria com profissional de tecnologia.
          </P>
          <P>
            Nosso foco é oferecer um serviço eficiente e moderno, tornando a
            administração da sua empresa um processo mais fácil.
          </P>

          <P>
            O principal objetivo de nossa empresa é oferecer segurança para sua
            empresa, cuidando dos assuntos junto as esferas publicas, fornecer
            relatórios claros e precisos que evidencie a saúde de sua empresa.
          </P>

          <Title> <i className="fa-solid fa-bullseye" />Missão</Title>

          <P>
            A HS Bomfim Contabilidade tem como missão oferecer serviços contábeis com qualidade e inovação, buscando superar as expectativas de nossos clientes.
          </P>

          <Title> <i className="fa-regular fa-eye" />Visão</Title>

          <P>
            Ser uma referência em contabilidade, focado na qualidade da prestação de
            serviços, buscamos sempre a excelência e trabalhamos para agregar valor
            ao seu negócio!
          </P>
          
          <Title><i className="fa-solid fa-handshake" />Valores</Title>
          
          <P>
            <ul>
              <li>Ética profissional e pessoal</li>
              <li>Respeito</li>
              <li>Pontualidade</li>
              <li>Confidencialidade</li>
              <li>Comprometimento</li>
              <li>Proatividade</li>
              <li>Transparência</li>
              <li>Responsabilidade</li>
            </ul>
          </P>
        </Main>
      </Column>
    </Layout>
  );
}

const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  color: var(--oxford-blue);
  padding: 15px;
  margin: 20px 0px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  padding: 15px 0px;
  border-bottom: 1px dashed var(--oxford-blue);
  i {
    margin-right: 10px;
  }
`;

const P = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 15px 0px;
  line-height: 1.5;
`;