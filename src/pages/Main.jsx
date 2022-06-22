import React from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import Feed from '../components/Feed';

const Main = () => {
  return (
    <Container>
      <Nav />
      <FeedContainer>
        <FeedWrapper>
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
          <Feed />
        </FeedWrapper>
      </FeedContainer>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  height: 100%;
  background-color: var(--gray-background-color);
`;
const FeedContainer = styled.div`
  padding: 20px 0px;
`;
const FeedWrapper = styled.div`
  width: 450px;
  margin: 0 auto;
`;
