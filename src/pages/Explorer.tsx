import React from "react";
import styled from "styled-components";


// Styled Components
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  font-size: 14px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const Card = styled.div`
  height: 150px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const ContentTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const ContentText = styled.p`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;


const Explorer: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Explorer</Title>
        <SearchInput placeholder="검색" />
      </Header>
      <Section>
        <SectionTitle>Explorer</SectionTitle>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
        <Content>
          <ContentTitle>Title</ContentTitle>
          <ContentText>contents</ContentText>
        </Content>
      </Section>
    </Container>
  );
};

export default Explorer;
