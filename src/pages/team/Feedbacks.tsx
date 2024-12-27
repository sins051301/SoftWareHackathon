import styled from 'styled-components';
import { isClassOwner } from '../../utils/auth';
import InsiteCard from "@/components/InsiteCard";
import { EvaluateResponse } from "@/types/EvaluateInterface";

interface BarProps {
  height: number;
}

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const Feedback = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 5px;
`;

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

const Feedbacks = () => {
  if (isClassOwner()) {
    const evaluateResponseDummyData: EvaluateResponse = {
      output: {
        score: ["8.125", "7.25", "8.375"],
        insight:
          "평균 점수 분석 결과, 학생들은 큐의 기본 개념과 \"선입선출(FIFO)\" 원칙을 잘 이해하고 있는 것으로 보입니다. 특히, 큐의 주요 기능인 enqueue와 dequeue의 작동 방식에 대한 이해가 명확하며, 큐가 다양한 자료 구조와 알고리즘에서 어떻게 활용되는지에 대해 인식하고 있습니다. 그러나, 많은 학생들이 큐의 구현 방법이나 원형 큐와 같은 변형에 대한 이해가 부족하며, 큐의 실제 응용 사례에 대한 구체적인 설명을 잘 하지 못했습니다. 교육 솔루션은 큐의 다양한 구현 방식과 응용 예시를 포함한 심화 학습 자료를 제공하고, 큐를 이용한 문제 해결 능력을 향상시키는 데 중점을 두어야 합니다. 이를 통해 학생들이 큐 자료 구조에 대한 보다 깊이 있고 체계적인 이해를 얻을 수 있을 것입니다.",
      },
      metadata: {
        run_id: "c2ee2256-f1d3-4f07-9004-76c11312f465",
        feedback_tokens: [],
      },
    };

    return (
      <InsiteCard data={evaluateResponseDummyData} />
    )
  }

  return (
    <Container>
      <Title>과제 결과</Title>
      <Section>
        <SectionTitle>과제 1: 1주차에 배운 내용을 AI 멘티에게 설명해주세요</SectionTitle>
        <ul>
          <li>학습 중점사항 1. 산-염기 반응 과정에 대해 설명하고, 실생활에서의 적용 사례를 제시하세요</li>
          <li>학습 중점사항 2. 중화 반응에 대해 설명하세요</li>
        </ul>
      </Section>
      <Section>
        <SectionTitle>중점 사항별 평균 점수</SectionTitle>
        <ChartContainer>
          <Bar height={80}>8</Bar>
          <Bar height={90}>9</Bar>
        </ChartContainer>
      </Section>
      <Section>
        <SectionTitle>피드백</SectionTitle>
        <Feedback>
          대다수의 학생들이 산과 염기의 정의와 특성을 명확히 설명하였으며, 산과 염기의 화학적 성질과 실생활에서의 의미를 잘 이해하고 있어요. 또한 산-염기 반응 과정, 특히 중화 반응에 대해 논리적이고 체계적으로 설명하였으며, 실생활에서의 적용 사례를 적절히 제시하였어요.
        </Feedback>
      </Section>
    </Container>
  );
};

export default Feedbacks;