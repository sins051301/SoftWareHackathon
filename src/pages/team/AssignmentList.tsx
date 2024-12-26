import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { usePostAssignment } from "@hooks/queries/assignment.ts";
import LoadingSpinner from "@components/LoadingSpinner.tsx";
import { SettingInterface } from "@/types/Assignment";
import { useGetWeek } from "@/hooks/queries/week.query";

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

const TaskCard = styled.div`
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`;

const TaskTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  background-color: #e6e6e6;
  border-radius: 20px;
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

const Textbox = styled.p`
  box-sizing: border-box;
  border: none;
  background-color: transparent;
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

const NormalTextbox = styled.p`
  font-size: 14px;
  margin-bottom: 5px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;


const AssignmentList = () => {
  const { teamId } = useParams() ?? 1;
  const {data}= useGetWeek(teamId);
  console.log(data);

  const { mutate, isPending, isError, error } = usePostAssignment();
  const [task, setTask] = useState<SettingInterface>({
    name: "",
    groupId: Number(teamId),
    focusOne: "",
    focusTwo: "",
    focusThree: "",
  });

  console.log(mutate)
  const [num, setNum] = useState(1);


  if (isError) {
    alert(error.message);
  }

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <Container>
      <Header>
        <Title>과제</Title>
        <Description>배운 내용을 AI에게 설명하며 복습해보세요</Description>
        </Header>
      <TaskCard>
        <TaskTitle
          value={task.name}
          placeholder="그 주차에 배운 내용을 AI에게 설명해 주세요"
        ></TaskTitle>

        <TaskInputs>
          <InputWrapper>
            <InputLabel>응답 횟수 제한</InputLabel>
            <Textbox>횟수</Textbox>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>글자수 제한</InputLabel>
            <Textbox>자</Textbox>
          </InputWrapper>
          <InputWrapper>
            <InputLabel>마감일</InputLabel>
            <Textbox>월 일</Textbox>
          </InputWrapper>
        </TaskInputs>

        <FocusLabel>
          <InputLabel>학습 중점 사항</InputLabel>
        </FocusLabel>
        <NormalTextbox value={task.focusOne} />
        {num >= 2 && (
          <NormalTextbox value={task.focusTwo} />
        )}
        {num >= 3 && (
          <NormalTextbox value={task.focusThree} />
        )}
      </TaskCard>

    </Container>
  );
};

export default AssignmentList;
