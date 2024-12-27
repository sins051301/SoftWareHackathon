import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import LoadingSpinner from '@components/LoadingSpinner.tsx';
import {SettingInterface} from '@/types/Assignment';
import {useGetWeek} from '@/hooks/queries/assignment';
import NoContents from '@components/NoContents.tsx';

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
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
  color: #666;
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

const ButtonLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const LinkButton = styled(Link)`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-left: auto;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;


const AssignmentList = () => {
  const {teamId} = useParams() ?? 1;
  const {data, isPending, isError, error} = useGetWeek(Number(teamId));


  if (isError) {
    alert(error?.message);
  }

  if (isPending) {
    return <LoadingSpinner/>;
  }

  return (
    <Container>
      <Header>
        <Title>과제</Title>
        <Description>배운 내용을 AI에게 설명하며 복습해보세요</Description>
      </Header>
      {data && data.length === 0 && (<NoContents message='과제가 없습니다' />)}
      {data && data.map((task: SettingInterface) => (
        <TaskCard>
          <TaskTitle>{task.name}</TaskTitle>

          <FocusLabel>
            <InputLabel>학습 중점 사항</InputLabel>
          </FocusLabel>

          {task.focusOne && (<NormalTextbox>{task.focusOne}</NormalTextbox>)}
          {task.focusTwo && (<NormalTextbox>{task.focusTwo}</NormalTextbox>)}
          {task.focusThree && (<NormalTextbox>{task.focusThree}</NormalTextbox>)}

          <ButtonLayout>
            <LinkButton to={`/chatting/${teamId}`}>시작하기</LinkButton>
          </ButtonLayout>
        </TaskCard>
      ))}

    </Container>
  );
};

export default AssignmentList;
