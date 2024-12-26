import { Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import NavigationBar from "@/components/NavigationBar";
import { getUserId } from "@/utils/auth";
import { useGetMyGroupList } from "@/hooks/queries/group.query";

// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  margin-bottom: 30px;
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const Name = styled.span`
  font-weight: bold;
`;

const CodingPage = () => {
  const id = getUserId() ?? "1";
  const { teamId } = useParams();

  const { data, isError, error } = useGetMyGroupList(id);

  if (isError) {
    return <p>{error?.message}</p>;
  }
  const filteredGroup = data?.find((item) => String(item.id) === teamId);
  return (
    <Container>
      <Header>
        <Title>Coding</Title>
        <Name> {filteredGroup?.userName}</Name>
      </Header>
      <NavigationBar />
      {/*Todo: Nav 부분적으로 나누기*/}
      <Outlet />
    </Container>
  );
};

export default CodingPage;
