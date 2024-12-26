import React from "react";
import styled from "styled-components";
import {Outlet, useParams} from 'react-router-dom';
import NavigationBar from '@components/NavigationBar.tsx';
import {getUserId} from '@utils/auth.ts';
import {useGetMyGroupList} from '@hooks/queries/group.query.ts';


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
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Author = styled.span`
  font-size: 14px;
  color: #666;
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;

const LeftSection = styled.div`
  flex: 3;
`;

const RightSection = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

const InfoValue = styled.span`
  font-size: 14px;
  color: #333;
`;

const ActionButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: block;
  margin-left: auto;

  &:hover {
    background-color: #0056b3;
  }
`;


const ScienceIntroPage: React.FC = () => {
  const id = getUserId() ?? "1";
  const { teamId } = useParams();

  const { data, isError, error } = useGetMyGroupList(id);
  const filteredGroup = data?.find((item) => String(item.id) === teamId);

  if (isError) {
    return <p>{error?.message}</p>;
  }

  return (
    <Container>
      <Header>
        <Title>{filteredGroup?.name}</Title>
        <Author>{filteredGroup?.userName}</Author>
      </Header>
      <Content>
        <LeftSection>
          <NavigationBar/>

          <Outlet/>

        </LeftSection>

        <RightSection>
          <Image src="https://picsum.photos/300/200" alt="" />
          <InfoBox>
            <InfoItem>
              <InfoLabel>AI 멘티 지능</InfoLabel>
              <InfoValue>신입생</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>공개 범위</InfoLabel>
              <InfoValue>{filteredGroup?.isOpen ? "공개" : "비공개" }</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>멤버</InfoLabel>
              <InfoValue>비공개</InfoValue>
            </InfoItem>
          </InfoBox>
        </RightSection>
      </Content>

      <ActionButton>대화 시작하기</ActionButton>
    </Container>
  );
};

export default ScienceIntroPage;
