import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetLeaderBoard } from "@/hooks/queries/leader.query";

// Styled Components
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  border-bottom: 2px solid #ddd;
  font-size: 14px;
`;

const TableData = styled.td`
  padding: 10px;
  font-size: 14px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 50%;
`;

const ScoreBadge = styled.span`
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
`;

const RankingPage = () => {
  const [search, setSearch] = useState("");
  const { teamId } = useParams();

  const { data } = useGetLeaderBoard(teamId);
  console.log("leader", data);
  const filteredRankings = data.filter((ranking) =>
    ranking.userName.includes(search)
  );

  return (
    <Container>
      <SearchInput type="text" placeholder="이름 검색하기" value={search} onChange={e => setSearch(e.target.value)}/>
      <Table>
        <thead>
        <TableRow>
          <TableHeader>순위</TableHeader>
          <TableHeader>이름</TableHeader>
          <TableHeader>점수</TableHeader>
        </TableRow>
        </thead>
        <tbody>
        {/*grade 처리 잘 하기*/}
        {filteredRankings.map((ranking, index) => (
          <TableRow key={ranking.id}>
            <TableData>{index + 1}</TableData>
            <TableData>
              <Profile>
                <Avatar/>
                {ranking.userName}
              </Profile>
            </TableData>
            <TableData>
              <ScoreBadge>{ranking.point}</ScoreBadge>
            </TableData>
          </TableRow>
        ), [])}

        </tbody>
      </Table>
    </Container>
  );
};

export default RankingPage;
