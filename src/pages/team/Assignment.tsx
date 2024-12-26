import styled from "styled-components";
import { usePostAssignment } from "@/hooks/queries/assignment";
import LoadingSpinner from "@/components/LoadingSpinner";
const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

function Assignment() {
  const { mutate, isPending, isError, error } = usePostAssignment();
  if (isError) {
    alert(error.message);
  }
  if (isPending) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return <Container></Container>;
}
export default Assignment;
