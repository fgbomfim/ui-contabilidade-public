import React from 'react';
import styled from 'styled-components';
import Header from './compositions/header';

export default function App() {
  return (
    <Main>
      <Header />

      <main>Main</main>

      <footer>
        footer
      </footer>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;