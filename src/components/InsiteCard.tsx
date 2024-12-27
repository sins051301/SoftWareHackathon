import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Bar = styled.div<BarProps>`
  width: 50px;
  height: ${({ height }) => height}px;
  margin: 0 10px;
  background-color: #bae7ff;
  border: 1px solid #91d5ff;
  text-align: center;
  color: #333;
  font-size: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 5px;
`;

const CardWarrper = styled.div`
  align-items: center;
  border: 1px solid #e8e8e8;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
`;

const InsiteCard = ({data}: {data: EvaluateResponse} ) => {
  return (
    <>
      <ChartContainer>
        {data.output.score.map((score, index) => (
          <Bar key={index} height={score * 10}>
            {score}
          </Bar>
        ), [])}
      </ChartContainer>
      <CardWarrper>
        {data.output.insight}
      </CardWarrper>
    </>
  );
}

export default InsiteCard;