/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import TaxConsultancy from '../assets/image/tax-consultancy.jpg';
import BankReconciliation from '../assets/image/bank-reconciliation.png';

interface SliderProps {
  id: number;
  background: string;
  text: string;
}
const sliders: SliderProps[] = [
  {
    id: 1,
    background: TaxConsultancy,
    text: 'Assessoria tributária',
  },
  {
    id: 2,
    background: BankReconciliation,
    text: 'Conciliação bancária',
  }
];

export default function Gallery() {
  return (
    <Main>
      {sliders.map(({ id }) => (
        <Input key={`s${id}`} id={`s${id}`} name="slider" type="radio" className={`input${id}`} /> 
      ))}

      <Slider className="slider">
        {sliders.map(({ id, background, text }) => (
          <Div key={`slider${id}`} style={{ backgroundImage: `url(${background})` }}>
            <h2>{text}</h2>
          </Div>
        ))}
      </Slider>
      
      <PrevNext className="prevNext">
        {sliders.map(({ id }) => (
          <div key={`prevNext${id}`}>
            {id === 1 ? (
              <Label htmlFor={`s${sliders.length}`} />
            ) : (
              <Label htmlFor={`s${id - 1}`} />
            )}

            {id === sliders.length ? (
              <Label htmlFor="s1" />
            ) : (
              <Label htmlFor={`s${id + 1}`} />
            )}
          </div>
        ))}
      </PrevNext>

      <Bullets className="bullets">
        {sliders.map(({ id }) => (
          <Label htmlFor={`s${id}`} key={`label${id}`}>{id}</Label>
        ))}
      </Bullets>
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  overflow: hidden;
  height: 439px;
  background-color: var(--platinum);
  color: #fff;  
  text-align: center;
`;

const Input = styled.input`
  display: none;
  &:checked {
    ~ {
      .prevNext >* { visibility: hidden; }
      .bullets >* { background: rgba(255, 255, 255, 0.5); }
    }

    &.input1 ~ {
      .prevNext >*:nth-child(1) {visibility: visible;}
      .slider { transform: translateX(   0%); -webkit-transform: translateX(   0%); }
      .bullets >*:nth-child(1) {background: rgba(255, 255, 255,   1);}
    }

    &.input2 ~ {
      .bullets >*:nth-child(2) {background: rgba(255, 255, 255,   1);}
      .prevNext >*:nth-child(2) {visibility: visible;}
      .slider {transform: translateX(-100%); -webkit-transform: translateX(-100%);}
    }

    &.input3 ~ {
      .bullets >*:nth-child(3) {background: rgba(255, 255, 255,   1);}
      .prevNext >*:nth-child(3) {visibility: visible;}
      .slider {transform: translateX(-200%); -webkit-transform: translateX(-200%);}
    }

    &.input4 ~ {
      .bullets >*:nth-child(4) {background: rgba(255, 255, 255,   1);}
      .prevNext >*:nth-child(4) {visibility: visible;}
      .slider {transform: translateX(-300%); -webkit-transform: translateX(-300%);}
    }
  }
`;

const Slider = styled.div`
  height: 100%;
  white-space: nowrap;
  font-size: 0;
  transition: 0.8s;
  position: relative;
  > * {
    font-size: 1rem;
    display: inline-block;
    white-space: normal;
    vertical-align: top;
    height: 100%;
    width: 100%;
    background: none 50% no-repeat;
    background-size: cover;
  }
`;

const Div = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
`;

const Label = styled.label`
  border-radius: 50%;
  margin: 0 3px;
  color: rgba(0,0,0,0.8);
  text-decoration: none;
`;

const PrevNext = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 100%;
  height: 0;

  > div+div {
    visibility: hidden;
  }

  label {
    background: #fff;
    position: absolute;
    width:       60px;
    height:      60px;
    line-height: 60px; /* If you want to place numbers */
    text-align: center;
    opacity: 0.7;
    -webkit-transition: 0.3s;
            transition: 0.3s;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    left: 0;

    &:hover {
      opacity: 1;
    }

    + label {
      left: auto;
      right: 0;
    }
  }
`;

const Bullets = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  padding: 10px 0;
  width: 100%;
  text-align: center;

  > label {
    display: inline-block;
    width:       30px;
    height:      30px;
    line-height: 30px;
    text-decoration: none;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    -webkit-transition: 0.3s;
            transition: 0.3s;

    + label {
      background: rgba(255, 255, 255, 0.5);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.7) !important;
    }
  }
`;
