import styled from "styled-components";
import Column from "../components/column";
import LogoTransparent from "../elements/logo-transparent";
import Row from "../components/row";

import Email from '../assets/image/email.png';
import Instagram from '../assets/image/instagram.png';
import Whatsapp from '../assets/image/whatsapp.png';
import Phone from '../assets/image/phone.png';

export default function Footer() {
  return (
    <FooterBar>
      <Column>
        <Row>
          <Grid>
            <div><LogoTransparent /></div>
            <Div>
              <A href="https://www.instagram.com/hsbomfim.contabilidade" target="_blank">
                <Image src={Instagram} />
              </A>

              <A href="https://api.whatsapp.com/send?phone=5511952086786" target="_blank">
                <Image src={Whatsapp} />
              </A>

              <A href="tel:5511952086786" target="_blank">
                <Image src={Phone} />
              </A>

              <A href="mailto:hsbomfim.contabilidade@gmail.com" target="_blank">
                <Image src={Email} />
              </A>
            </Div>
          </Grid>
        </Row>

        <Copyright style={{ textAlign: 'center' }}>
          Copyright © {new Date().getFullYear()} MF Bomfim. Todos os direitos reservados.
        </Copyright>
      </Column>

    </FooterBar>
  );
}

const FooterBar = styled.nav`
  display: flex;
  height: 260px;
  width: 100%;
  padding: 25px 0px;
  background-color: var(--oxford-blue-3);
`;

const Div = styled.div`
  border-left: 2px solid var(--platinum);
  text-align: right;
  align-items: center;
  align-content: center;
  justify-content: center;
  
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
`;

const Image = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 16px;
`;

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  flex-direction: column;
  padding-top: 15px;
  padding-bottom: 10px;
  color: var(--slate-gray);
`

const A = styled.a``;