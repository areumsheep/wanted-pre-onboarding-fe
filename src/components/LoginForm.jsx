import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = () => {
  const navigate = useNavigate();
  const [idCheck, setIdCheck] = useState();
  const [pwCheck, setPwCheck] = useState();

  const idRef = useRef(null);
  const pwRef = useRef(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const userPw = localStorage.getItem('userPw');
    if (userId && userPw) {
      navigate('/main', { replace: true });
    }
  }, []);

  const handleIdValidation = (e) => {
    const regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setIdCheck(regEmail.test(e.target.value));
  };
  const handlePwValidation = (e) => {
    const regPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    setPwCheck(regPassword.test(e.target.value));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (idCheck && pwCheck) {
      localStorage.setItem('userId', idRef.current.value);
      localStorage.setItem('userPw', pwRef.current.value);
      navigate('/main', { replace: true });
    } else {
      alert('아이디와 비밀번호를 다시 확인해주세요.');
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        type="text"
        name="id"
        ref={idRef}
        onKeyUp={handleIdValidation}
        className={
          idCheck === true || idCheck === undefined
            ? 'input-valid'
            : 'input-invalid'
        }
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        type="password"
        name="pw"
        ref={pwRef}
        onKeyUp={handlePwValidation}
        className={
          pwCheck === true || idCheck === undefined
            ? 'input-valid'
            : 'input-invalid'
        }
        placeholder="비밀번호"
      />

      <button
        type="submit"
        style={{ background: idCheck && pwCheck ? '#0095f6' : '#c0dffd' }}
      >
        로그인
      </button>
    </StyledForm>
  );
};

export default LoginForm;

const StyledForm = styled.form`
  input {
    width: 100%;
    background: #fafafa;
    border: 1px solid #a8a8a8;
    padding: 13px 0px 13px 10px;
    margin: 5px 0px;
    border-radius: 3px;
  }
  .input-valid {
    border: 1px solid #a8a8a8;
  }
  .input-invalid {
    border: 1px solid red;
  }
  button {
    color: white;
    font-weight: 600;
    width: 100%;
    margin: 10px 0px;
    padding: 10px 0px;
    border-radius: 5px;
  }
`;
