import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { SLIDERS } from "../constants/app";

function generateCSS() {
  let styles = '';
  const { length } = SLIDERS;

  for (let i = 1; i <= length; i++) {
    const slider = SLIDERS[i];

    styles += `
      &.input${slider?.id} ~ {
        .bullets >*:nth-child(${slider?.id}) {
          background: rgba(255, 255, 255,   1);
        }
        .prevNext >*:nth-child(${slider?.id}) {
          visibility: visible;
        }
        .slider {
          transform: translateX(${slider?.dimension}%);
          -webkit-transform: translateX(${slider?.dimension}%);
        };
      }
    `;
  }

  return css`${styles}`;
}

export default function Gallery() {
  const [count, setCount] = useState(1);
  const { length} = SLIDERS;
  const navigation = useNavigate();

  function redirectTo(path: string) {
    navigation(path);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const next = count < length ? count + 1 : 0; 
      document.getElementById(`s${next}`)?.click();
      setCount(next);
    }, 5000);

    return () => clearInterval(interval); 
  }, [count, length]);

  return (
    <Main>
      {SLIDERS.map(({ id }) => (
        <Input key={`s${id}`} id={`s${id}`} name="slider" type="radio" className={`input${id}`} /> 
      ))}

      <Slider className="slider">
        {SLIDERS.map(({ id, background, text }) => (
          <Div
            key={`slider${id}`}
            style={{
              backgroundImage: `url(${background})`
            }}
            role="slider"
          >
            <h2>
              <Button
                data-testid={`goToService${id}`}
                onClick={() => redirectTo(`services/#service${id}`)}
              >
                {text}
              </Button>
            </h2>
          </Div>
        ))}
      </Slider>
      
      <PrevNext className="prevNext">
        {SLIDERS.map(({ id }) => (
          <div key={`prevNext${id}`}>
            {id === 1 ? (
              <Label htmlFor={`s${SLIDERS.length}`}>
                <i className="fa-solid fa-arrow-left" />
              </Label>
            ) : (
              <Label htmlFor={`s${id - 1}`}>
                <i className="fa-solid fa-arrow-left" />
              </Label>
            )}

            {id === SLIDERS.length ? (
              <Label htmlFor="s1">
                <i className="fa-solid fa-arrow-right" />
              </Label>
            ) : (
              <Label htmlFor={`s${id + 1}`}>
                <i className="fa-solid fa-arrow-right" />
              </Label>
            )}
          </div>
        ))}
      </PrevNext>

      <Bullets className="bullets">
        {SLIDERS.map(({ id }) => (
          <Label htmlFor={`s${id}`} key={`label${id}`} />
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

    ${generateCSS()}
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
    width:       15px;
    height:      15px;
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

const Button = styled.button`
  text-decoration: none;
  cursor: pointer;
  background-color: var(--slate-gray);
  color: var(--platinum);
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
`;