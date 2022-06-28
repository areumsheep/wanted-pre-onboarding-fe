import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/device';
import InstagramLogo from '../assets/images/instagram_logo.png';

const Nav = () => {
  const navigate = useNavigate();
  const onLogout = (e) => {
    localStorage.removeItem('userId');
    localStorage.removeItem('userPw');
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <LogoImage src={InstagramLogo} />
        <StyledInput type="search" name="search-bar" placeholder="검색" />
        <SyledIconWrapper>
          <StyledIcon></StyledIcon>
          <StyledIcon></StyledIcon>
          <StyledIcon onClick={onLogout}>logout</StyledIcon>
        </SyledIconWrapper>
      </Wrapper>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  position: sticky;
  top: 0px;
  height: 55px;
  width: 100%;
  margin: 0 auto;
  background: var(--white-background-color);
  border-bottom: 1px solid var(--border-color);
`;
const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    width: 95%;
  }
`;
const LogoImage = styled.img`
  height: 65%;
`;
const StyledInput = styled.input`
  background: #efefef;
  width: 280px;
  height: 70%;
  padding-left: 20px;

  @media ${device.tablet} {
    display: none;
  }
`;
const SyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledIcon = styled.div`
  --icon-size: 40px;
  cursor: pointer;
  background: #efefef;
  width: var(--icon-size);
  height: var(--icon-size);
  line-height: var(--icon-size);
  margin: 0px 3px;
  font-size: 0.8rem;
  text-align: center;
`;
