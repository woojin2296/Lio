import React from 'react';
import styled from 'styled-components';
import useLogin from 'src/hooks/admin/useLogin';
import Logo from 'src/images/logo-green.png';

const Login = ({ history }) => {
  const { onLogin, onChangeField } = useLogin({ history });
  const onChangeID = e => onChangeField({ key: 'uid', value: e.target.value });
  const onChangePW = e => onChangeField({ key: 'pw1', value: e.target.value });
  return (
    <div className="admin-body">
      <LoginWrap>
        <form className="login-form" onSubmit={onLogin}>
          <img src={Logo} width="100" height="50" alt="" />
          <div className="label1">
            <label htmlFor="name">아이디</label>
            <input className="form-control" type="text" name="uid" onChange={onChangeID} />
          </div>
          <div className="label2">
            <label htmlFor="name">비밀번호</label>
            <input className="form-control" type="password" name="pw1" onChange={onChangePW} />
          </div>
          <button className="btn btn-info btn-lg" type="submit">
            로그인
          </button>
        </form>
      </LoginWrap>
    </div>
  );
};

const LoginWrap = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  .login-form {
    position: absolute;
    top: 28%;
    left: 40%;
    width: 400px;
    height: 400px;
    img {
      margin: 0 auto;
      margin-bottom: 2rem;
      display: flex;
    }
    .label1 + .label2 {
      margin-top: 2rem;
    }
    button {
      margin-top: 2rem;
    }
  }
`;

export default Login;
