import React from 'react';
import styled from 'styled-components';
import CardList from './CardList/index';

export default function Home() {
  return (
    <StyledHomeContainer>
      <CardList />
    </StyledHomeContainer>
  );
}

const StyledHomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: pink;
  justify-content: center;
`;
