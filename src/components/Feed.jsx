import React, { useEffect } from 'react';
import styled from 'styled-components';
import Comment from './Comment';

import Meatball from '../assets/icons/meatball_icon.png';
import Heart from '../assets/icons/heart_icon.png';
import Chat from '../assets/icons/chat_icon.png';
import Send from '../assets/icons/send_icon.png';
import Bookmark from '../assets/icons/bookmark_icon.png';

const Feed = ({ data }) => {
  return (
    <Container>
      <FeedProfile>
        <ProfileDetail>
          <StyledProfileIcon
            src={data.profileImage}
            alt={data.profileImageAlt}
          />
          <StyledProfileName>{data.userId}</StyledProfileName>
        </ProfileDetail>
        <MeatballButton src={Meatball} />
      </FeedProfile>
      <FeedImage src={data.feedImage} alt={data.feedImageAlt} />

      <ButtonWrapper>
        <ButtonBefore>
          <IconButton src={Heart} />
          <IconButton src={Chat} />
          <IconButton src={Send} />
        </ButtonBefore>
        <IconButton src={Bookmark} style={{ marginRight: '0px' }} />
      </ButtonWrapper>
      <LikeText>좋아요 {data.likes.toLocaleString('ko-KR')}개</LikeText>

      <Comment data={data.comments} />
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
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
  padding: 6px 10px 0px 10px;
`;
const FeedProfile = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
`;
const StyledProfileIcon = styled.img`
  --profile-icon-size: 32px;
  height: var(--profile-icon-size);
  width: var(--profile-icon-size);
  border-radius: 50%;
`;
const StyledProfileName = styled.span`
  margin-left: 12px;
  font-size: 0.9rem;
  font-weight: bold;
`;
const MeatballButton = styled.img`
  --button-icon-size: 20px;
  height: var(--button-icon-size);
  width: var(--button-icon-size);
`;
