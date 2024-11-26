import styled from "styled-components";
import Layout from "../components/layout";
import Column from "../components/column";

import Banner1 from '../assets/image/banner-hand-pencil-1.png';
import BPO from '../assets/image/bpo.png';
import Consult from '../assets/image/consult.png';
import ServiceImage from '../assets/image/services.png';
import CardSolutionsBusiness, {
  CardSolutionsBusinessProps,
} from "../components/card-solutions-business";
import Gallery from "../components/gallery";

const solutions: CardSolutionsBusinessProps[] = [
  {
    image: ServiceImage,
    title: 'Serviços contabeis',
    paragraph: 'Serviços oferecidos:',
    solutions: ['Abertura', 'Encerramento', 'Legalização', 'Atendimento MEI', 'Declaração de Imposto de Renda'],
    redirectTo: '/services'
  },
  {
    image: Consult,
    title: 'Consultoria tributária',
    paragraph: 'Consultoria humanizada e especializada',
    solutions: [
      'Planejamento Tributário',
      'Consultoria Fiscal e Tributária',
      'Estruturção de Negócios',
      'Assessoria Tributária',
    ],
    redirectTo: '/services' 
  },
  {
    image: BPO,
    title: 'BPO',
    paragraph: 'Estratégia de terceirização das atividades financeiras para sua empresa',
    solutions: [
      'Gestão de contas a pagar e a receber',
      'Conciliação bancária',
      'Gestão da documentação',
      'Fluxo de caixa',
    ],
    redirectTo: '/services'
  },
];

export default function Home() {
  return (
    <Layout page="home">
      <BannersTop>
        Seu sucesso é o nosso <br /> compromisso!
      </BannersTop>

      <Column>
        <Services>
          <TitleServices>Soluções para seu negócio</TitleServices>

          <ContainerCards>
            {solutions.map(solution => (
              <CardSolutionsBusiness key={solution.title} {...solution} />
            ))}
          </ContainerCards>
        </Services>
        <DivBannerBottom>
          <Gallery />
        </DivBannerBottom>
      </Column>
    </Layout>
  );
}

const BannersTop = styled.div`
  background-image: url(${Banner1});
  background-repeat: no-repeat;
  height: 250px;
  width: 100%;
  background-clip: border-box;
  background-size: cover;
  font-size: 64px;
  display: flex;
  color: #fff;
  font-weight: 600;
  justify-content: center;
  text-align: center;
  align-items: center;
  justify-items: center;
`;

const Services = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleServices = styled.h1`
  font-size: 48px;
  text-align: center;
  font-weight: 600;
  color: var(--oxford-blue);
  width: 100%;
  padding: 20px 0px;
`;

const DivBannerBottom = styled.div`
  width: 100%;
  height: 439px;
`;

const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;
