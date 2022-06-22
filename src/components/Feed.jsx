import React from 'react';
import styled from 'styled-components';
import Meatball from '../assets/images/meatball_button.png';

const Feed = () => {
  return (
    <Container>
      <ProfileWrapper>
        <ProfileDetail>
          <StyledProfileIcon />
          <StyledProfileName>wanted</StyledProfileName>
        </ProfileDetail>
        <MeatballButton src={Meatball} />
      </ProfileWrapper>
    </Container>
  );
};

export default Feed;

const Container = styled.div`
  height: 300px;
  width: 100%;
  background: var(--white-background-color);
  border: 1px solid var(--border-color);
  margin-top: 20px;
  border-radius: 7px;
`;
const ProfileWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileDetail = styled.div`
  display: flex;
  align-items: center;
`;
const StyledProfileIcon = styled.div`
  --profile-icon-size: 32px;
  height: var(--profile-icon-size);
  width: var(--profile-icon-size);
  background: #d3d3d3;
  border-radius: 50%;
`;
const StyledProfileName = styled.span`
  margin-left: 7px;
  font-size: 0.9rem;
  font-weight: bold;
`;
const MeatballButton = styled.img`
  --button-icon-size: 20px;
  height: var(--button-icon-size);
  width: var(--button-icon-size);
`;
