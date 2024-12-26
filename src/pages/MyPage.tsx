import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "@/components/LoadingSpinner";
import { usePostGroup } from "@hooks/queries/group.query.ts";

// Styled Components
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  padding: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;

  &.essential::after {
    content: " *";
    color: hotpink;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f9f9f9;
`;

const TextArea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f9f9f9;
  resize: none;
  height: 100px;
`;

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

const MyPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ranking, setRanking] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const { isPending } = usePostGroup();

  if (isPending) {
    return <LoadingSpinner />;
  }

  function handleSubmit() {
    // Handle form submission logic
    alert("프로필이 성공적으로 업데이트되었습니다.");
    navigate("/");
  }

  return (
    <Container>
      <Title>내 정보</Title>
      <FormContainer>
        <ProfilePicture src="https://picsum.photos/300/300" alt="프로필" />
        <InputGroup>
          <Label>랭킹</Label>
          <Input placeholder="당신의 랭킹" value={ranking} readOnly />
        </InputGroup>
        <InputGroup>
          <Label className="essential">이름</Label>
          <Input
            placeholder="이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label className="essential">이메일</Label>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label className="essential">랭킹</Label>
          <Input
            placeholder="랭킹을 입력하세요"
            value={ranking}
            onChange={(e) => setRanking(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label className="essential">어드민 유저</Label>
          <Input
            type="checkbox"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </InputGroup>

        <InputGroup>
          <Label className="essential">비밀번호 변경</Label>
          <Input
            type="password"
            placeholder="새 비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Label className="essential">소개</Label>
          <TextArea
            placeholder="소개를 입력하세요"
            value={introduction}
            onChange={(e) => setIntroduction(e.target.value)}
          />
        </InputGroup>
      </FormContainer>

      <ButtonGroup>
        <StyledButton onClick={handleSubmit}>프로필 업데이트</StyledButton>
      </ButtonGroup>
    </Container>
  );
};

export default MyPage;
