import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/device';
import Nav from '../components/Nav';
import Feed from '../components/Feed';

const Main = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userPw = localStorage.getItem('userPw');
    if (!(userId && userPw)) {
      navigate('/', { replace: true });
    }
  }, []);

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
  width: 425px;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
