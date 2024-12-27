import React from "react";
import styled from "styled-components";

const ScoreBox = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const TotalScore = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  border-radius: 20px;
  background-color: #e6e6e6;
  padding: 2%;
  width: 30%;
`;

const SubScore = styled.div`
  margin-top: 10px;
`;

const SubTitle = styled.div`
  font-weight: bold;
  font-size: 12px;
  margin-bottom: 8px;
  color: #999999;
`;

const SubDescription = styled.div`
  font-size: 13px;
  color: black;
  line-height: 1.5;
  border-radius: 20px;
  background-color: white;
  padding: 5%;
`;

const DummyReport: React.FC = () => {
  return (
    <ScoreBox>
      <TotalScore>총 점수 19점</TotalScore>
      <SubScore>
        <SubTitle>학습 중점사항 1: 10점</SubTitle>
        <SubDescription>
          산과 염기의 정의와 특성을 명확히 설명하였으며, 산과 염기의 화학적
          성질과 실생활에서의 의미를 잘 이해하고 있다
        </SubDescription>
      </SubScore>
      <SubScore>
        <SubTitle>학습 중점사항 2: 9점</SubTitle>
        <SubDescription>
          산-염기 반응 과정, 특히 중화 반응에 대해 논리적이고 체계적으로
          설명하였으며, 실생활에서의 적용 사례를 적절히 제시하였다.
        </SubDescription>
      </SubScore>
    </ScoreBox>
  );
};

export default DummyReport;
