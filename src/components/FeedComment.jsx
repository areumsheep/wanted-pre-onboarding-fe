import React from 'react';
import styled from 'styled-components';

const FeedComment = () => {
  return (
    <Container>
      <CommentName>areumsheep</CommentName>
      <span>안녕하세요!</span>
    </Container>
  );
};

export default FeedComment;

const Container = styled.div`
  font-size: 0.8rem;
  margin: 4px 0px;
`;
const CommentName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
