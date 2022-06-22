import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import InstagramLogo from '../assets/images/instagram_logo.png';

const Login = () => {
  return (
    <Container>
      <LoginWrapper>
        <LogoImage src={InstagramLogo} />
        <LoginForm />
      </LoginWrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  background-color: var(--gray-background-color);
  padding-top: 50px;
`;
const LoginWrapper = styled.div`
  max-width: 350px;
  height: 400px;
  padding: 35px 30px;
  margin: 0 auto;
  background: var(--white-background-color);
  border: 1px solid var(--border-color);
  box-sizing: border-box;
  text-align: center;
`;
const LogoImage = styled.img`
  width: 60%;
  margin: 25px 0px;
`;
