import styled from "styled-components";
import Spacing from "./Spacing";
const SideBack = styled.div`
  width: 20vw;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const Control = styled.div`
  border-bottom: 1px solid black;
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 3%;
`;

const ControlItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  float: left;
  width: 90%;
`;

const ControlButton = styled.button`
  font-weight: bold;
  width: 90%;
  background-color: transparent;
  border: none;
  text-align: left;
`;

const Select = styled.select`
  position: relative;
  font-weight: bold;
  font-size: 5px;
  background-color: transparent;
  height: 50px;
  width: 200px;
  border: none;
`;

const Label = styled.label`
  position: absolute;
  z-index: 1000;
  font-weight: bold;
  font-size: 15px;
  background-color: transparent;

  height: 40px;
  border: none;
`;

function SideBar() {
  return (
    <SideBack>
      <Head>Teach me</Head>
      <Spacing size={3} />
      <Control>
        <ControlItem>
          <div>f</div>
          <ControlButton>홈</ControlButton>
        </ControlItem>
        <ControlItem>
          <div>f</div>
          <ControlButton>둘러보기</ControlButton>
        </ControlItem>
        <ControlItem>
          <div>f</div>
          <ControlButton>랭킹</ControlButton>
        </ControlItem>
        <ControlItem>
          <div>f</div>
          <ControlButton>내 정보</ControlButton>
        </ControlItem>
      </Control>
      <ControlItem>
        <Label htmlFor="team">나의 작업</Label>
        <Select value={"나의 직업"}>
          <option></option>
          <option></option>
          <option></option>
          <option></option>
        </Select>
      </ControlItem>
    </SideBack>
  );
}

export default SideBar;
