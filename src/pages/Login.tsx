import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid rgba(0, 0, 0, .12);
  padding: 55px 69px 50px 69px;
  width: 580px;
`;

const Input = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 45px;
  padding: 10px 0 8px;
  border: 0;
  font-size: 18px;
  line-height: 25px;
  color: #191919;
  background-color: transparent;
  letter-spacing: 0;
  box-sizing: border-box;
  outline: none;
  border-bottom: 1px solid #e5e5e5;
  caret-color: #191919;
  opacity: 1;
`;

const CheckboxContainer = styled.div`
  display: flex;
  font-size: 0.9rem;
  color: #888;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #ffeb00;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #ffcc00;
  }
`;

const QRButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 4rem;

  a {
    margin: 0 0.5rem;
    color: #888;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');
  // 아이디 따라서 쿠키 저장
  // 쿠키 이름 user-cookie : 1 또는 2
  
  function login() {
    alert('로그인 버튼 클릭');
    
    if (password === '')
      return alert('비밀번호를 입력해주세요');
    
    if (password !== 'user1') {
      document.cookie = 'user-cookie=1';
    }
    else {// (password !== 'user2') {
      document.cookie = 'user-cookie=2';
    }

    navigate('/main');
    return;
  }
  
  return (
    <Container>
      <Logo>kakao</Logo>
      <LoginForm>
        <Input type="text" placeholder="카카오메일 아이디, 이메일, 전화번호"/>
        <Input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)}/>
        <CheckboxContainer>
          <Checkbox type="checkbox" />
          <label>간편로그인 정보 저장</label>
        </CheckboxContainer>
        <LoginButton onClick={login}>로그인</LoginButton>
        <QRButton>QR코드 로그인</QRButton>
      </LoginForm>
      <Footer>
        <a href="#">회원가입</a>
        <a href="#">계정 찾기</a>
        <a href="#">비밀번호 찾기</a>
      </Footer>
    </Container>
  );
};

export default LoginPage;
