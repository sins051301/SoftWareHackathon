import {Outlet} from 'react-router-dom';
import styled from "styled-components";
import NavigationBar from "@/components/NavigationBar";


// Styled Components
const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
`;

const CodingPage = () => {

  return (
    <Container>
      <Header>
        <Title>Coding</Title>
        <Subtitle>
          Start here! Predict survival on the Titanic and get familiar with ML
          basics
        </Subtitle>
      </Header>
      <NavigationBar />
      {/*Todo: Nav 부분적으로 나누기*/}
      <Outlet />
    </Container>
  );
};

export default CodingPage;
