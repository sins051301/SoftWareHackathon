import { Container } from "../styles/commonStyles";
import styled from "styled-components";
import CompassLogo from "@/assets/compass.svg?react";

const LoadingContainer = styled(Container)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #e33a3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
`;
const Logo = styled.div`
  width: 5.6875rem;
  height: 5.6875rem;
`;
const Title = styled.div`
  text-align: center;
  width: 26.5635rem;
  height: 5.8125rem;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  font-size: 3rem;
`;
const UnderLine = styled.p`
  font-weight: 400;
  size: 0.875rem;
`;

const WriterLine = styled.div`
  width: 16.1875rem;
  height: 2.6875rem;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 10%;
  font-size: 1rem;
`;

function MainLoading() {
  return (
    <LoadingContainer>
      <Logo>
        <CompassLogo />
      </Logo>
      <Title>맛집나침반</Title>
      <UnderLine>TestGuid</UnderLine>
      <WriterLine>SAI with SejongUniv</WriterLine>
    </LoadingContainer>
  );
}
export default MainLoading;
