import styled from "styled-components";
import Header from "../compositions/header";
import { PropsWithChildren } from "react";
import { HeaderProps } from "../interfaces/header-props";
import Footer from "../compositions/footer";

export default function Layout({ children, page }: PropsWithChildren<HeaderProps>) {
  return (
    <Main>
      <Header page={page} />
      {children}
      <Footer />
    </Main>
  )
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;