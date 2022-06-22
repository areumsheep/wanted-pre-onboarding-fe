import React from 'react';
import styled from 'styled-components';
import Heart from '../assets/images/heart_button.png';
import Chat from '../assets/images/chat_button.png';
import Send from '../assets/images/send_button.png';
import Bookmark from '../assets/images/bookmark_button.png';

const FeedButton = () => {
  return (
    <>
      <ButtonWrapper>
        <ButtonBefore>
          <IconButton src={Heart} />
          <IconButton src={Chat} />
          <IconButton src={Send} />
        </ButtonBefore>
        <IconButton src={Bookmark} style={{ marginRight: '0px' }} />
      </ButtonWrapper>
      <LikeText>좋아요 0개</LikeText>
    </>
  );
};

export default FeedButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ButtonBefore = styled.div`
  display: flex;
  align-items: center;
`;
const IconButton = styled.img`
  --icon-size: 23px;
  width: var(--icon-size);
  height: var(--icon-size);
  margin-right: 15px;
`;
const LikeText = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  padding-top: 18px;
`;
