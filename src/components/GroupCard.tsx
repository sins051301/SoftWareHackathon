import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {getRandomName} from '@/pages/MainPage.tsx';
import {GroupResponse} from '@/types/GroupInterface.ts';


// Styled Components
const Card = styled.div`
  height: 250px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const GroupTitle = styled.div`
  padding: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  font-weight: bold;
  font-size: 1rem;
`;

const Explain = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const Img = styled.img`
  height: 160px;
  width: 100%;
`;

const Letter = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-weight: bold;
  background-color: #e5e5e5;
  font-size: 0.7rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: none;
    background-color: transparent; /* 원하는 배경색으로 설정 */
  }
`;

interface GroupCardProps {
  item: GroupResponse;
}

const GroupCard = ({ item }: GroupCardProps) => {
  return (
    <StyledLink to={`team/${item.id}`}>
      <Card>
        <Img src={"https://picsum.photos/300/200"} alt="" />
        <GroupTitle>
          <div>{item.name}</div>
          <div style={{ fontSize: "0.5rem" }}>{item.userName}</div>
        </GroupTitle>
        <Explain>
          {Array.from({ length: 4 }).map((_, index) => (
            <Letter key={index}>{getRandomName()}</Letter>
          ))}
          <Letter>+50</Letter>
        </Explain>
      </Card>
    </StyledLink>
  );
};

export default GroupCard;