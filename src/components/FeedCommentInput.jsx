import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import Smile from '../assets/images/smile_button.png';

const FeedCommentInput = () => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  return (
    <Container>
      <IconButton src={Smile} />
      <CommentForm>
        <CommentText
          ref={textRef}
          placeholder="댓글 달기..."
          onInput={handleResizeHeight}
        ></CommentText>
        <CommentSend type="submit">게시</CommentSend>
      </CommentForm>
    </Container>
  );
};

export default FeedCommentInput;

const Container = styled.div`
  width: 100%;
  padding: 10px var(--feed-left-right-size);
  border-top: 1px solid var(--border-color);
  display: flex;
`;
const IconButton = styled.img`
  --icon-size: 20px;
  width: var(--icon-size);
  height: var(--icon-size);
`;
const CommentForm = styled.form`
  margin-left: 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CommentText = styled.textarea`
  height: 20px;
  width: 80%;
  border: none;
  resize: none;
  font-family: inherit;
`;
const CommentSend = styled.button`
  width: 37px;
  height: 100%;
  background-color: transparent;
  color: #0095f6;
  float: right;
`;
