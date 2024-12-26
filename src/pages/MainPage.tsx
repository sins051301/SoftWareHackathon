import styled from "styled-components";
import { Link } from "react-router-dom";
import { useGetGroupList } from "@/hooks/queries/group.query";
// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const CreateButton = styled.button`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #f7f7f7;
  }
`;

const WelcomeCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
`;

const WelcomeText = styled.div`
  h2 {
    margin: 0 0 10px 0;
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-size: 14px;
    color: #666;
  }
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const GroupCard = styled.div`
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

const names = ["김", "이", "박", "신", "고", "정", "수"];
const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const MainPage = () => {
  const { data, isError, error } = useGetGroupList();
  if (isError) {
    return <p>{error?.message}</p>;
  }
  console.log(data);

  return (
    <Container>
      <Header>
        <Title>홈</Title>
        <Link to="/create-group" className="sidebar-menu">
          <CreateButton>+ 클래스 생성</CreateButton>
        </Link>
      </Header>
      <WelcomeCard>
        <WelcomeText>
          <h2>안녕하세요! 김지용님</h2>
          <p>
            Teach me는 학생들이 AI에게 배운 내용을 설명하면서 학습 상태를
            점검하고, 멘토는 학생들의 학습 상태를 확인할 수 있는 서비스입니다
          </p>
        </WelcomeText>
      </WelcomeCard>
      <SectionTitle>나의 클래스</SectionTitle>
      <GroupContainer>
        {data.map((item) => (
          <StyledLink to={`team/${item.id}`}>
            <GroupCard>
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
            </GroupCard>
          </StyledLink>
        ))}
      </GroupContainer>
    </Container>
  );
};

export default MainPage;
