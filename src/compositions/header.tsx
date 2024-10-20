import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Column from "../components/column";

import Logo from '../elements/logo';
import { HeaderProps } from "../interfaces/header-props";
import Row from "../components/row";

export default function Header({ page }: HeaderProps) {
  const navigate = useNavigate();

  const openWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=5511952086786')
  }

  const redirect = (path: string) => {
    navigate(path);
  };

  return (
    <NavBar>
      <Column>
        <Row>
          <Button
            id="header-button-home"
            data-cy="header-button-home"
            data-testid="header-button-home"
            onClick={() => redirect('/')}>
            <Logo />
          </Button>
          
          <Main>
            <Ul>
              <Li className={page === 'about-us' ? 'active' : ''}>
                <Button
                  id="header-anchor-about-us"
                  data-cy="header-anchor-about-us"
                  data-testid="header-anchor-about-us"
                  className="anchor"
                  onClick={() => redirect('/about-us')}
                >
                  Quem Somos
                </Button>
              </Li>

              <Li className={page === 'services' ? 'active' : ''}>
                <Button
                  id="header-anchor-services"
                  data-cy="header-anchor-services"
                  data-testid="header-anchor-services"
                  className="anchor"
                  onClick={() => redirect('/services')}
                >
                  Serviços
                </Button>
              </Li>

              <Li className={page === 'contact' ? 'active' : ''}>
                <Button
                  id="header-anchor-contacts"
                  data-cy="header-anchor-contacts"
                  data-testid="header-anchor-contacts"
                  className="anchor"
                  onClick={() => redirect('/contacts')}
                >
                  Contato
                </Button>
              </Li>

              <Li
                id="header-anchor-whatsapp"
                data-cy="header-anchor-whatsapp"
                className="whatsapp"
                data-testid="header-anchor-whatsapp"
                onClick={openWhatsapp}
              >
                <Contacts>
                  <div>
                    <Icon className="fa-brands fa-whatsapp" />
                  </div>

                  <Div style={{ paddingTop: 4 }}>
                    <Div>
                      <Text>(11) <Strong>95208-6786</Strong></Text>
                    </Div>

                    <Div>
                      <Small>
                        segunda a sexta
                        <br />
                        09:00-18:00
                      </Small>
                    </Div>    
                  </Div>
                </Contacts>
              </Li>
            </Ul>
          </Main>
        </Row>
      </Column>
    </NavBar>
  );
}

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--platinum);
  font-size: 15px;
  &.anchor {
    width: 100%;
    display: block;
    padding: 7px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  height: 65px;
  background-color: var(--oxford-blue);
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 216px);
  justify-content: space-between;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px;
  padding: 0px;
`;

const Li = styled.li`
  width: calc(100% / 4);
  text-align: center;
  padding-top: 30px;

  :hover {
    box-shadow: 0px 2px 0px var(--slate-gray);
  }
  &.whatsapp {
    padding: 0px;
    text-align: right;
    cursor: pointer;
  }
  &.active {
    > button {
      background-color: #263449;
    }
  }
`;

const Contacts = styled.div`
  width: 240px;
  padding: 7px 0px 7px;
  margin: 0px;
  display: grid;;
  grid-template-areas: "icon . . . .";
  :hover {
    box-shadow: none;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  :hover {
    box-shadow: none;
  }
`;

const Icon = styled.i`
  font-size: 50px;
  color: var(--platinum);
`;

const Text = styled.span`
  font-size: 16px;
`;

const Strong = styled.span`
  font-size: 20px;
`;

const Small = styled.span`
  font-size: 12px;
`;
