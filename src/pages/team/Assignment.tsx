import { useState } from "react";
import styled from "styled-components";
import { usePostAssignment } from "@hooks/queries/assignment.ts";
import LoadingSpinner from "@components/LoadingSpinner.tsx";
import Add from "@/assets/add.svg?react";
import { AssignmentRequest } from "@/types/Assignment";
import { useParams } from "react-router-dom";


// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: white;
  border: 1px solid #d8d8d8;
  height: auto;
  border-radius: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  flex: 1;
  margin-left: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const TaskCard = styled.div`
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const TaskTitle = styled.input`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  border-radius: 20px;
  width: 90%;
  height: 30px;
  padding: 2%;
`;

const TaskInputs = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: flex;
  border-radius: 20px;
  background-color: white;
  padding: 1%;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
  color: #666;
`;

const Input = styled.input`
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #999999;
  font-size: 11px;
  width: 44px;
`;

const FocusLabel = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FocusPoint = styled.input`
  font-size: 14px;
  margin-bottom: 5px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 90%;
`;

const AddPointButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const AddTaskButton = styled.button`
  padding: 10px;
  font-size: 18px;
  color: #007bff;
  background-color: transparent;
  border: 2px dashed #007bff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  margin: 20px auto;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const TaskSettingsPage: React.FC = () => {
  const { teamId } = useParams() ?? 1;
 

  const { mutate, isPending, isError, error } = usePostAssignment();
  const [task, setTask] = useState<AssignmentRequest>({
    name: "",
    groupId: Number(teamId),
    focusOne: "",
    focusTwo: "",
    focusThree: "",
  });
  const [num, setNum] = useState(1);

  function onClick() {
    setNum((prev) => Math.min(prev + 1, 3));
  }

  if (isError) {
    alert(error.message);
  }

  if (isPending) {
    return <LoadingSpinner />;
  }

  function handleFocusChange(
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) {
    const value = e.target.value;
    setTask((prev) => ({
      ...prev,
      ...(id === 1 && { focusOne: value }),
      ...(id === 2 && { focusTwo: value }),
      ...(id === 3 && { focusThree: value }),
    }));
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTask((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }

  const addTask = () => {
    mutate(task);
    setTask((prev) => ({
      ...prev,
      name: "",
      focusOne: "",
      focusTwo: "",
      focusThree: "",
    }));
    setNum(1);
  };

  return (
    <Container>
      <Header>
        <Title>과제 설정</Title>
        <Description>주차별로 학습중점 사항을 입력해주세요</Description>
        <SubmitButton>설정 완료</SubmitButton>
      </Header>
      <TaskCard>
        <TaskTitle
          onChange={onChange}
          value={task.name}
          placeholder="그 주차에 배운 내용을 AI에게 설명해 주세요"
        ></TaskTitle>
        <TaskInputs>
          <InputWrapper>
            <InputLabel>응답 횟수 제한</InputLabel>
            <Input placeholder="횟수" />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>글자수 제한</InputLabel>
            <Input placeholder="자" />
          </InputWrapper>
          <InputWrapper>
            <InputLabel>마감일</InputLabel>
            <Input placeholder="월 일" />
          </InputWrapper>
        </TaskInputs>
        <FocusLabel>
          <InputLabel>학습 중점 사항</InputLabel>
          <AddPointButton onClick={onClick}>
            <Add style={{ width: "10", height: "10" }} /> 추가하기
          </AddPointButton>
        </FocusLabel>
        <FocusPoint
          value={task.focusOne}
          onChange={(e) => handleFocusChange(e, 1)}
        />
        {num >= 2 && (
          <FocusPoint
            value={task.focusTwo}
            onChange={(e) => handleFocusChange(e, 2)}
          />
        )}
        {num >= 3 && (
          <FocusPoint
            value={task.focusThree}
            onChange={(e) => handleFocusChange(e, 3)}
          />
        )}
      </TaskCard>

      <AddTaskButton onClick={addTask}>+</AddTaskButton>
    </Container>
  );
};

export default TaskSettingsPage;
