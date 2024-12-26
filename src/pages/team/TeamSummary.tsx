import { useGetMyGroupList } from "@/hooks/queries/group.query";
import { getUserId } from "@/utils/auth";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 1.6;

  a {
    color: #007bff;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const TeamSummary = () => {
  const id = getUserId() ?? "1";
  const { teamId } = useParams();

  const { data, isError, error } = useGetMyGroupList(id);

  if (isError) {
    return <p>{error?.message}</p>;
  }
  const filteredGroup = data?.find((item) => String(item.id) === teamId);
  return (
    <Content>
      <p>{filteredGroup?.explain}</p>
    </Content>
  );
};

export default TeamSummary;
