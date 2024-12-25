
import AccountReceivable from '../assets/image/account-receivable.jpg';
import BankReconciliation from '../assets/image/bank-reconciliation.png';
import CashFlow from '../assets/image/cash-flow.jpg';
import Close from '../assets/image/close-company.jpg';
import DocManager from '../assets/image/doc-manager.jpg';
import Holding from '../assets/image/holding.png';
import Ir from '../assets/image/ir.jpg';
import Legalization from '../assets/image/legalization-company.jpg';
import Mei from '../assets/image/mei.jpg';
import Open from '../assets/image/open-company.jpg';
import TaxConsultancy from '../assets/image/tax-consultancy.jpg';
import TaxPlanning from '../assets/image/tax-planning.webp';
import { Service } from '../interfaces/service';
import { Slider } from '../interfaces/slider';

export const SLIDERS: Slider[] = [
  {
    id: 1,
    background: TaxConsultancy,
    text: 'Assessoria Tributária',
    dimension: 0,
  },
  {
    id: 2,
    background: BankReconciliation,
    text: 'Conciliação Bancária',
    dimension: -100,
  },
  {
    id: 3,
    background: TaxPlanning,
    text: 'Planejamento Tributário',
    dimension: -200,
  },
  {
    id: 4,
    background: AccountReceivable,
    text: 'Contas a Receber',
    dimension: -300,
  },
  {
    id: 5,
    background: CashFlow,
    text: 'Fluxo de Caixa',
    dimension: -400,
  },
  {
    id: 6,
    background: DocManager,
    text: 'Gestão de Documentos',
    dimension: -500,
  },
  {
    id: 7,
    background: Ir,
    text: 'Imposto de Renda',
    dimension: -600,
  },
  {
    id: 8,
    background: Legalization,
    text: 'Legalização de Empresas',
    dimension: -700,
  },
  {
    id: 9,
    background: Mei,
    text: 'Atendimento MEI',
    dimension: -800,
  },
  {
    id: 10,
    background: Open,
    text: 'Abertura de Empresas',
    dimension: -900,
  },
  {
    id: 11,
    background: Holding,
    text: 'Estruturção de Negócios',
    dimension: -1000,
  },
  {
    id: 12,
    background: Close,
    text: 'Encerramento de Empresas',
    dimension: -1100,
  },
];

export const ACCOUNTING_SERVICES: Service[] = [
  {
    id: 1,
    image: Open,
    title: 'Abertura de Empresas',
    text: `Formalizar o negócio é um dos primeiros passos do empreendedorismo, o
          que requer auxílio especializado para o empreendedor passar pelas
          etapas de abertura com sucesso. Fornecemos o auxilio que você precisa
          nesse processo. Contudo, não é apenas esse o papel do contador.`,
  },
  {
    id: 2,
    image: Legalization,
    title: 'Legalização de Empresas',
    text: `Regularizar a sua empresa é torná-la mais eficiente, pronta para
          atender a todos os desafios do mercado, a todos os clientes que
          surgirem, sem nenhuma ]dúvida sobre as possibilidades. É ter certeza
          de não ter nenhuma surpresa.`,
  },
  {
    id: 3,
    image: Close,
    title: 'Encerramento de Empresas',
    text: `Como encerrar uma empresa? Não se preocupe, conte conosco nessa etapa
    difícil, iremos auxilia-lo no distrato social, débitos previdenciários, FGTS, 
    baixa na prefeitura e no estado, tributos federais, junta comercial, baixa 
    no CNPJ, etc.`,
  },
  {
    id: 4,
    image: Mei,
    title: 'Atendimento MEI',
    text: `Ser MEI traz benefícios e obrigações. Foque com os benefícios 
          e deixe a parte burocrática  para nós. A HS Bomfim Contabilidade 
          oferece o auxilio que vocé precisa para a formalização do MEI.`,
  },
  {
    id: 5,
    image: Ir,
    title: 'Declaração de Imposto de Renda',
    text: `A HS Bomfim Contabilidade oferece o auxilio que vocé precisa 
      para a sua declaração de imposto de renda. Com a nossa ajuda 
      vocé pode se concentrar na sua empresa e nos na burocrática da Imposto.
    `,
  }
];

export const TAX_CONSULTANCY: Service[] = [
  {
    id: 1,
    image: TaxPlanning,
    title: 'Planejamento Tributário',
    text: `A HS Bomfim Contabilidade oferece o auxilio que vocé precisa
      para obter mais economia tributária, bem como para garantir 
      maior conformidade em suas operações fiscais.
    `,
  },
  {
    id: 2,
    image: TaxConsultancy,
    title: 'Consultoria Fiscal e Tributária',
    text: `A consultoria tributária (também denominada consultoria fiscal) 
      é um leque de atividades voltadas às questões que demandam análise 
      específica dos temas que geram tributos ou obrigações fiscais, numa organização
    `,
  },
  {
    id: 3,
    image: Holding,
    title: 'Estruturção de Negócios',
    text: `A estruturação de negócios é a forma como uma empresa é 
      organizada internamente, incluindo a distribuição do capital 
      humano, a gestão, as operações e a alocação de recursos
    `,
  },
  {
    id: 4,
    image: Legalization,
    title: 'Assessoria Tributária',
    text: `
      A Assessoria Fiscal e Tributária é responsável pela apuração 
      de todos os impostos e registros fiscais de uma empresa - 
      nos âmbitos municipal, estadual e federal; de acordo com o 
      local e o segmento de atuação.
    `
  }
];

export const BPO_SERVICES: Service[] = [
  {
    id: 1,
    image: AccountReceivable,
    title: 'Gestão de contas a pagar e a receber',
    text: `Controle de Clientes, Controle de Caixa, Integrado a Bancos. 
      Sistema de gestão online, integrado e sem complicação
    `,
  },
  {
    id: 2,
    image: BankReconciliation,
    title: 'Conciliação bancária',
    text: `
      A conciliação bancária é um processo de gestão financeira que 
      compara as movimentações da conta corrente de uma empresa 
      com os registros contábeis
    `,
  },
  {
    id: 3,
    image: DocManager,
    title: 'Gestão da documentação',
    text: `
      A gestão de documentos é um conjunto de práticas que 
      envolvem a produção, o armazenamento, o controle e o 
      descarte de documentos de uma organização. Ela é uma 
      parte fundamental da administração de uma empresa, pois 
      permite a preservação de dados importantes, aumenta a 
      eficiência e melhora a produtividade.
    `,
  },
  {
    id: 4,
    image: CashFlow,
    title: 'Fluxo de caixa',
    text: `
      Fluxo de caixa é uma ferramenta de gestão financeira que 
      permite acompanhar as entradas e saídas de dinheiro de 
      uma empresa em um determinado período de tempo
    `,
  }
];