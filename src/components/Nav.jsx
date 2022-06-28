import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/device';

import InstagramLogo from '../assets/images/instagram_logo.png';
import Send from '../assets/icons/send_icon.png';
import Heart from '../assets/icons/heart_icon.png';
import LogOut from '../assets/icons/logout_icon.png';

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
        <img src={InstagramLogo} />
        <input type="search" name="search-bar" placeholder="검색" />
        <SyledIconWrapper>
          <img src={Send} />
          <img src={Heart} />
          <img src={LogOut} onClick={onLogout} />
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
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    width: 95%;
  }

  img {
    height: 63%;
  }
  input {
    background: #efefef;
    width: 280px;
    height: 70%;
    padding-left: 20px;

    @media ${device.tablet} {
      display: none;
    }
  }
`;
const SyledIconWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    --icon-size: 27px;
    width: var(--icon-size);
    height: var(--icon-size);
    margin: 0px 7px;
    font-size: 0.8rem;
    text-align: center;
  }
`;
