
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