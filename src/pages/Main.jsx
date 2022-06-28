import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/device';
import { getFeeds } from '../utils/api';
import Nav from '../components/Nav';
import Feed from '../components/Feed';

const Main = () => {
  const navigate = useNavigate();
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userPw = localStorage.getItem('userPw');
    if (!(userId && userPw)) {
      navigate('/', { replace: true });
    }
    getFeeds().then((res) => setFeeds(res));
  }, []);

  return (
    <Container>
      <Nav />
      <FeedContainer>
        <FeedWrapper>
          {feeds &&
            feeds.map((feed, index) => <Feed key={index} data={feed} />)}
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
  overflow-x: hidden;
`;
const FeedWrapper = styled.div`
  width: 460px;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 100%;
  }
`;
