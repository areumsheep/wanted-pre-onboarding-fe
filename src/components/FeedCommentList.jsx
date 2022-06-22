import React from 'react';
import styled from 'styled-components';
import FeedComment from './FeedComment';

const FeedCommentList = () => {
  return (
    <Container>
      <FeedComment />
      <FeedComment />
    </Container>
  );
};

export default FeedCommentList;

const Container = styled.div`
  padding: 10px 0px;
`;
