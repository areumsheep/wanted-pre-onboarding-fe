import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userPw = localStorage.getItem('userPw');
    console.log(userId, userPw);
    if (userId) {
      idRef.current = userId;
    } else if (userPw) {
      pwRef.current = userPw;
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userId', idRef.current.value);
    localStorage.setItem('userPw', pwRef.current.value);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        name="id"
        ref={idRef}
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <StyledInput
        type="password"
        name="pw"
        ref={pwRef}
        placeholder="비밀번호"
      />

      <Link to="/main">
        <StyledButton type="submit">로그인</StyledButton>
      </Link>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form``;
const StyledInput = styled.input`
  width: 100%;
  background: #fafafa;
  border: 1px solid #a8a8a8;
  padding: 13px 0px 13px 10px;
  margin: 5px 0px;
  border-radius: 3px;
`;
const StyledButton = styled.button`
  background: #c0dffd;
  color: white;
  font-weight: 600;
  width: 100%;
  margin: 10px 0px;
  padding: 10px 0px;
  border-radius: 5px;
`;
