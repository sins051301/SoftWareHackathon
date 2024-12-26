import React from "react";
import styled from "styled-components";
import { useGetGroupList } from "@/hooks/queries/group.query.ts";
import GroupCard from "@/components/GroupCard.tsx";

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

// const SearchInput = styled.input`
//   width: 200px;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 20px;
//   font-size: 14px;
// `;

const Section = styled.div`
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
`;

const Explorer: React.FC = () => {
  const { data, isError, error } = useGetGroupList();

  if (isError) {
    return <p>{error?.message}</p>;
  }

  return (
    <Container>
      <Header>
        <Title>둘러보기</Title>
        {/*<SearchInput placeholder="검색" />*/}
      </Header>
      <Section>
        <CardContainer>
          {data?.map(
            (item) => (
              <GroupCard key={item.id} item={item} />
            ),
            []
          )}
        </CardContainer>
      </Section>
    </Container>
  );
};

export default Explorer;
