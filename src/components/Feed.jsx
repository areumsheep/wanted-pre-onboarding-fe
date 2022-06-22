import React from 'react';
import styled from 'styled-components';
import FeedProfile from './FeedProfile';
import FeedButton from './FeedButton';
import FeedCommentList from './FeedCommentList';
import FeedCommentInput from './FeedCommentInput';

const Feed = () => {
  return (
    <Container>
      <FeedProfile />
      <FeedImage src={'https://source.unsplash.com/random/900x500'} />
      <FeedBottom>
        <FeedButton />
        <FeedCommentList />
      </FeedBottom>
      <FeedCommentInput />
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  width: 100%;
  background: var(--white-background-color);
  border: 1px solid var(--border-color);
  margin-top: 20px;
  border-radius: 7px;
`;
const FeedImage = styled.img`
  width: 100%;
`;
const FeedBottom = styled.div`
  padding: 10px var(--feed-left-right-size);
`;
