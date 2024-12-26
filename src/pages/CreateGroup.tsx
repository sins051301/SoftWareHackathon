import styled from "styled-components";

// Styled Components
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Form = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background: #f9f9f9;
  box-sizing: border-box;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`;

const Select = styled.select`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background: #f9f9f9;
  box-sizing: border-box;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  background: #f9f9f9;
  resize: none;
  height: 100px;
  box-sizing: border-box;
`;

const SubmitButton = styled.button`
  background: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
`;

const CreateGroup = () => {
  return (
    <Container>
      <Title>클래스 만들기</Title>
      <Form>
        <Input type="text" placeholder="클래스 이름" />
        <Row>
          <Select>
            <option>학습 도우미 지정</option>
            <option>도우미 A</option>
            <option>도우미 B</option>
          </Select>
          <Select>
            <option>공개범위</option>
            <option>전체 공개</option>
            <option>비공개</option>
          </Select>
        </Row>
        <Input type="text" placeholder="멤버" />
        <Label>클래스 설명</Label>
        <TextArea placeholder="클래스에 대한 설명을 입력하세요..." />
      </Form>
      <br />
      <SubmitButton>클래스 만들기</SubmitButton>
    </Container>
  );
};

export default CreateGroup;
