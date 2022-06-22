import React from 'react';
import styled from 'styled-components';
import InstagramLogo from '../assets/images/instagram_logo.png';

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImage src={InstagramLogo} />
        <StyledInput type="search" name="search-bar" placeholder="검색" />
        <SyledIconWrapper>
          <StyledIcon></StyledIcon>
          <StyledIcon></StyledIcon>
          <StyledIcon>logout</StyledIcon>
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
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoImage = styled.img`
  height: 65%;
`;
const StyledInput = styled.input`
  background: #efefef;
  width: 300px;
  height: 70%;
  padding-left: 20px;
`;
const SyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledIcon = styled.div`
  --icon-size: 45px;

  background: #efefef;
  width: var(--icon-size);
  height: var(--icon-size);
  line-height: var(--icon-size);
  margin: 0px 3px;
  font-size: 0.8rem;
  text-align: center;
`;
