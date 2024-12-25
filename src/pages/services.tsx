import styled from "styled-components";
import Column from "../components/column";
import Gallery from "../components/gallery";
import Layout from "../components/layout";
import { ACCOUNTING_SERVICES, BPO_SERVICES, TAX_CONSULTANCY } from "../constants/app";
import CardService from "../components/Card-service";

export default function Services() {
  return (
    <Layout page="services">
      <Column>
        <Gallery />

        <Section id="accounting-services">
          <Title>Serviços contabeis</Title>

          <Cards>
            {ACCOUNTING_SERVICES.map(({ id, image, text, title }) => (
              <CardService key={id} title={title} paragraph={text} image={image} />
            ))}
          </Cards>
        </Section>

        <Section id="tax-consultancy">
          <Title>Consultoria tributária</Title>

          <Cards>
            {TAX_CONSULTANCY.map(({ id, image, text, title }) => (
              <CardService key={id} title={title} paragraph={text} image={image} />
            ))}
          </Cards>
        </Section>

        <Section id="bpo-services">
          <Title>BPO (Business Process Outsourcing)</Title>

          <Cards>
            {BPO_SERVICES.map(({ id, image, text, title }) => (
              <CardService key={id} title={title} paragraph={text} image={image} />
            ))}
          </Cards>
        </Section>
      </Column>
    </Layout>
  );
}

const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  margin: 20px 0px;
  justify-content: center;
  color: var(--oxford-blue);
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  justify-content: space-between;

  div {
    margin-bottom: 15px;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;


const Title = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 40px;
  text-align: center;
`;