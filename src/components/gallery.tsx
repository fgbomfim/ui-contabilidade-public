/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";

interface SliderProps {
  id: number;
  color: string;
  text: string;
}
const sliders: SliderProps[] = [
  {
    id: 1,
    color: '#5b8',
    text: 'Slide 1',
  },
  {
    id: 2,
    color: '#85b',
    text: 'Slide 2',
  },
  {
    id: 3,
    color: '#e95',
    text: 'Slide 3',
  },
  {
    id: 4,
    color: '#e59',
    text: 'Slide 4',
  },
];

export default function Gallery() {
  return (
    <Main className="CSSgal">
      {sliders.map(({ id }) => (
        <S key={`s${id}`} id={`s${id}`} className={`input${id}`} /> 
      ))}

      <Slider className="slider">
        {sliders.map(({ id, color, text }) => (
          <div key={`slider${id}`} style={{ background: color }}>
            <h2>{text}</h2>
          </div>
        ))}
      </Slider>
      
      <PrevNext className="prevNext">
        <div><A href="#s4" /><A href="#s2" /></div>
        <div><A href="#s1" /><A href="#s3" /></div>
        <div><A href="#s2" /><A href="#s4" /></div>
        <div><A href="#s3" /><A href="#s1" /></div>
      </PrevNext>

      <Bullets className="bullets">
        <A href="#s1">1</A>
        <A href="#s2">2</A>
        <A href="#s3">3</A>
        <A href="#s4">4</A>
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

const S = styled.s`
  &:target {
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

const A = styled.a`
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

  a {
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

    +a {
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

  > a {
    display: inline-block;
    width:       30px;
    height:      30px;
    line-height: 30px;
    text-decoration: none;
    text-align: center;
    background: rgba(255, 255, 255, 1);
    -webkit-transition: 0.3s;
            transition: 0.3s;

    + a {
      background: rgba(255, 255, 255, 0.5);
    }

    &:hover {
      background: rgba(255, 255, 255, 0.7) !important;
    }
  }
`;
