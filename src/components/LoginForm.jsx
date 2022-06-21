import React from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <StyledForm>
      <StyledInput
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <StyledInput type="password" placeholder="비밀번호" />
      <StyledButton type="submit">로그인</StyledButton>
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
