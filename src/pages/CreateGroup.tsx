import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {usePostGroup} from '@/hooks/queries/group.query';
import LoadingSpinner from '@/components/LoadingSpinner';
import CheckSvg from '@/assets/check.svg?react';


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
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  flex: 3;
  background-color: #fff;
  border: 1px solid #D8D8D8;
  border-radius: 8px;
  padding: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  background-color: #fff;
  border: 1px solid #D8D8D8;
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

const SelectGroup = styled.div`
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #f9f9f9;
  border-radius: 8px;
  font-size: 14px;
  background-color: #f9f9f9;
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


const CreateGroup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [descriptions, setDescriptions] = useState('');
  const [isPublicString, setIsPublicString] = useState('true');
  const [password, setPassword] = useState('');
  const {mutate, isPending} = usePostGroup();

  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  function handleSubmit() {
    mutate({
      name: name,
      isOpen: isPublicString === 'true',
      explain: descriptions,
      password: password,
    });
    alert('클래스가 생성되었습니다.');
    navigate('/');
  }

  return (
    <Container>
      <Title>클래스 만들기</Title>
      <FormContainer>
        <LeftSection>
          <InputGroup>
            <Label className="essential">클래스 이름</Label>
            <Input placeholder="클래스 이름을 정해주세요" value={name} onChange={e => setName(e.target.value)}/>
          </InputGroup>

          <InputGroup>
            <Label className="essential">클래스 설명</Label>
            <TextArea placeholder="클래스에 대한 설명을 적어주세요" value={descriptions}
                      onChange={e => setDescriptions(e.target.value)}/>
          </InputGroup>

          <InputGroup>
            <Label>클래스 패스워드</Label>
            <Input placeholder="패스워드를 입력해주세요" value={password} onChange={e => setPassword(e.target.value)}/>
          </InputGroup>
        </LeftSection>

        <RightSection>
          <SelectGroup>
            <Label>AI 멘티 지능</Label>
            <Select>
              <option>옵션 1</option>
              <option>옵션 2</option>
            </Select>
          </SelectGroup>
          <SelectGroup>
            <Label>공개범위</Label>
            <Select value={isPublicString} onChange={e => setIsPublicString(e.target.value)}>
              <option value="true">전체 공개</option>
              <option value="">비공개</option>
            </Select>
          </SelectGroup>
          <InputGroup>
            <Label>멤버</Label>
            <Input placeholder="멤버를 추가해주세요"/>
          </InputGroup>
        </RightSection>
      </FormContainer>

      <ButtonGroup>
        <StyledButton onClick={handleSubmit}>
          <CheckSvg/>
          클래스 만들기
        </StyledButton>
      </ButtonGroup>
    </Container>
  );
};

export default CreateGroup;
