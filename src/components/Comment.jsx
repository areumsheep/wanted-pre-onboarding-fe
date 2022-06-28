import React, { useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Smile from '../assets/icons/smile_icon.png';

const Comment = ({ data }) => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);

  return (
    <Container>
      <CommentContainer>
        {data &&
          data.map((value, index) => {
            return (
              <CommentWrapper key={index}>
                <CommentName>{value.userId}</CommentName>
                <span>{value.comment}</span>
              </CommentWrapper>
            );
          })}
      </CommentContainer>

      <InputContainer>
        <IconButton src={Smile} />
        <CommentForm>
          <CommentText
            ref={textRef}
            placeholder="댓글 달기..."
            onInput={handleResizeHeight}
          ></CommentText>
          <CommentSend type="submit">게시</CommentSend>
        </CommentForm>
      </InputContainer>
    </Container>
  );
};

export default Comment;

const Container = styled.div``;

const CommentContainer = styled.div`
  font-size: 0.8rem;
  padding: 10px 10px;
`;
const CommentWrapper = styled.div`
  margin-bottom: 5px;
`;
const CommentName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const InputContainer = styled.div`
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
