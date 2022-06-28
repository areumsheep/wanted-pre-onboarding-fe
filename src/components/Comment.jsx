import React, { useRef, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Smile from '../assets/icons/smile_icon.png';

const Comment = ({ data }) => {
  const [textCheck, setTextCheck] = useState(false);
  const [comments, setComments] = useState([]);
  const textRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    setComments(data);
  }, []);

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  }, []);
  const onTextInput = async (e) => {
    setTextCheck(textRef.current.value ? true : false);
    if (e.key === 'Enter') {
      await onSubmit(e);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const addComment = {
      userId: 'anonymous',
      comment: textRef.current.value,
    };
    setComments([...comments, addComment]);
    formRef.current.reset();
    textRef.current.style.height = '20px';
    setTextCheck(false);
  };

  return (
    <>
      <CommentContainer>
        {comments &&
          comments.map((value, index) => {
            return (
              <CommentWrapper key={index}>
                <CommentName>{value.userId}</CommentName>
                <CommentText>{value.comment}</CommentText>
              </CommentWrapper>
            );
          })}
      </CommentContainer>

      <InputContainer>
        <img src={Smile} alt="이모티콘 추가" />
        <CommentForm ref={formRef} onSubmit={onSubmit}>
          <textarea
            ref={textRef}
            placeholder="댓글 달기..."
            onKeyUp={onTextInput}
            onInput={handleResizeHeight}
          ></textarea>
          <button
            type="submit"
            style={{ color: textCheck ? '#0195f6' : '#c0e0fd' }}
          >
            게시
          </button>
        </CommentForm>
      </InputContainer>
    </>
  );
};

export default Comment;

const CommentContainer = styled.div`
  font-size: 0.8rem;
  padding: 12px var(--feed-left-right-size);
`;
const CommentWrapper = styled.div`
  margin-bottom: 5px;
  display: flex;
  span {
    display: block;
  }
`;
const CommentName = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;
const CommentText = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px var(--feed-left-right-size);
  border-top: 1px solid var(--border-color);
  display: flex;

  img {
    --icon-size: 20px;
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

const CommentForm = styled.form`
  margin-left: 7px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  textarea {
    height: 20px;
    width: 80%;
    border: none;
    resize: none;
    font-family: inherit;
  }
  button {
    width: 37px;
    height: 100%;
    background-color: transparent;
    float: right;
  }
`;
