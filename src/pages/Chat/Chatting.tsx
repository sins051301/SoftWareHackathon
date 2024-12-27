import { useState } from "react";
import postChatGpt from "@/api/postChatGpt";
import styled from "styled-components";
import ChattingContainer from "./ChattingContainer";
import { useChatStore } from "@/store/useChatStore";
import { Response } from "@/types/ChatInterface";
import Spacing from "@/components/Spacing";
import { useGetWeekPersonal } from "@/hooks/queries/week.query";
import { useGetWeek as useGetWeekList } from "@/hooks/queries/assignment";
import { useParams, Link } from "react-router-dom";
import { useGetMyGroupList } from "@/hooks/queries/group.query";
import { getUserId } from "@/utils/auth";
import { usePostEvaluate } from "@/hooks/queries/chatgpt.query";
import LoadingSpinner from "@/components/LoadingSpinner";
import InsiteCard from "@/components/InsiteCard";
import { EvaluateResponse } from "@/types/EvaluateInterface";
import DummyReport from "./DummyReport";
import { isClassOwner } from "@/utils/auth";

const Head = styled.h1`
  font-weight: bold;
  font-size: 2rem;
`;

const SubTitle = styled.div`
  width: 100%;
  border: 1px solid #d8d8d8;
  height: 15%;
  padding: 2px;
  border-radius: 10px;
`;

const SubExplain = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
`;

const SubRule = styled.p`
  color: #999999;
  font-size: 1rem;
`;

const StyledButton = styled.button`
  width: 33px;
  height: 33px;
  border-radius: 50px;
  position: absolute;
  bottom: 15%;
  right: 2%;
  border: none;
`;

const Control = styled.div`
  position: sticky;
  bottom: 0;
  height: 4rem;
  width: 90%;
  bottom: 0.1%;
`;

const Input = styled.input`
  background-color: #fafafa;
  border-radius: 25px;
  border: none;
  height: 100%;
  width: 100%;
  position: absolute;
  padding: 1%;
`;

const ChatBack = styled.div`
  flex: 1;
  max-height: 90%;
  width: 100%;
  overflow-y: auto;
`;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 3;
`;

const RightSection = styled.div`
  flex: 1;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const ChatLink = styled(Link)`
  color: #333;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #666;
`;

const maxCnt = 3;

const dummyData = {
  input: {
    Class: "산과 염기",
    Lecture: "[1주차] 산과 염기",
    Level: "하",
    History:
      "AI: 안녕! 이번 수업에서 어떤 내용이 중요하다고 생각해? 산과 염기의 정의와 특성에 대해 좀 더 알고 싶어! \n 나영채: 산과 염기는 각각 수소 이온과 수산화 이온의 농도로 정의되는데, 이들의 화학적 성질이 독특해서 다양한 반응을 일으켜. 예를 들어, 산과 염기가 만나면 중화 반응이 일어나 물과 염이 생성되지.",
  },
  config: {},
  kwargs: {},
};

const evaluateDummyData = {
  input: {
    Class: "Introduction to Chemistry",
    Focus:
      "1. 산과 염기의 정의와 특성을 정확히 설명할 수 있는가?  \n2.산-염기 반응 과정(예: 중화 반응)을 논리적으로 서술할 수 있는가? \n3.산-염기 반응이 실생활에서 어떻게 활용되는지 사례를 제시할 수 있는가?",
    History:
      "AI: 산과 염기에 대해 배웠다면서? 산은 정확히 뭘 의미해? \nUser: 산은 수용액에서 H⁺ 이온을 내놓는 물질을 말해. 대표적으로 염산(HCl) 같은 물질이 있어. 산의 특성으로는 신맛이 나고, 금속과 반응해서 수소 기체를 발생시키는 게 있어. \nAI: 아, 그래서 산이 금속을 부식시킨다고 하는 거구나. 염기는 뭐야? \nUser: 염기는 수용액에서 OH⁻ 이온을 내놓는 물질을 말해. 예를 들어, 수산화나트륨(NaOH)이 있어. 염기는 쓴맛이 나고, 미끌미끌한 촉감을 가진다는 특징이 있어. \nAI: 산과 염기가 만나면 어떤 반응이 일어나? \nUser: 산과 염기가 만나면 중화 반응이 일어나. 중화 반응은 H⁺ 이온과 OH⁻ 이온이 결합해서 물(H₂O)을 생성하고, 나머지 이온들로 염(salt)이 만들어지는 반응이야. \nAI: 그러면 중화 반응은 실생활에서 어디에 쓰여? \nUser: 대표적으로 위산 과다를 치료할 때 제산제를 사용하는 예를 들 수 있어. 제산제는 염기성 물질로 위산과 반응해서 중화시키는 역할을 해. 또 하나는 농업에서 토양의 산성을 조절할 때 석회(염기성 물질)를 사용하기도 해. \nAI: 중화 반응이 이렇게 실생활에 많이 쓰이다니 흥미롭다! 그런데 산과 염기의 강도는 어떻게 결정되는 거야? \nUser: 산과 염기의 강도는 이온화되는 정도에 따라 결정돼. 강산은 거의 100% 이온화돼서 H⁺ 이온을 많이 내놓고, 강염기도 완전히 이온화돼서 OH⁻ 이온을 많이 생성해. 반면, 약산과 약염기는 부분적으로만 이온화돼. \nAI: 이온화라는 말이 재밌네. 그럼 강산이나 강염기를 다룰 때 조심해야겠네? \nUser: 맞아. 강산이나 강염기는 부식성이 강해서 피부나 금속을 손상시킬 수 있어. 그래서 실험할 때 항상 보호 장비를 착용해야 해. \nAI: 보호 장비가 중요한 이유를 이제 알겠어. 그런데 산과 염기가 모두 들어 있는 용액도 있을까? \nUser: 물론 있어. 예를 들어, 암모니아(NH₃) 같은 약염기를 물에 녹이면 약산과 약염기의 성질을 모두 가진 완충 용액을 만들 수 있어. 이런 용액은 pH 변화를 막아주는 역할을 해. \nAI: 완충 용액이 pH를 유지하는 데 도움이 되는구나! 생물학에서도 쓰일 것 같은데? \nUser: 맞아. 혈액이 대표적인 예야. 혈액에는 탄산 완충 시스템이 있어서 pH를 약 7.4로 유지해. 이 시스템이 없으면 혈액이 산성화되거나 염기성으로 변해서 생명에 치명적인 영향을 줄 수 있어. \nAI: 혈액의 pH까지 완충 용액이 관여한다니 대단하다. 너 덕분에 산과 염기에 대해 훨씬 잘 이해했어.",
    Lecture: "Acid-Base Reactions",
  },
  config: {},
  kwargs: {},
};

const evaluateResponseDummyData: EvaluateResponse = {
  output: {
    score: ["8.125", "7.25", "8.375"],
    insight:
      "평균 점수 분석 결과, 학생들은 광합성과 세포 호흡의 기본 개념과 생태계 내의 에너지 흐름을 잘 이해하고 있는 것으로 보입니다. 특히, 이들 과정의 상호 연결성을 잘 이해하고 있으며, 에너지 전환의 중요성을 인식하고 있습니다. 그러나, 많은 학생들이 세부 메커니즘에 대한 이해가 부족하며, 세포 소기관의 역할이나 루비스코와 같은 특정 효소의 기능을 명확히 설명하지 못했습니다. 교육 솔루션은 세포 호흡과 광합성의 세부 과정과 관련된 심화 학습 자료를 제공하고, 무산소 상태에서의 대체 경로와 같은 특수한 상황에 대한 이해를 강화하는 데 중점을 두어야 합니다. 이를 통해 학생들이 보다 깊이 있고 체계적인 과학적 이해를 얻을 수 있을 것입니다.",
  },
  metadata: {
    run_id: "c2ee2256-f1d3-4f07-9004-76c11312f465",
    feedback_tokens: [],
  },
};

export function Chatting() {
  const { teamId } = useParams();
  const [isFinish, setFinish] = useState(false);
  const id = getUserId() ?? "1";
  const {
    mutate,
    isPending,
    isError,
    error,
    data: lastData,
  } = usePostEvaluate();

  console.log(lastData);
  const { data: mainTitle } = useGetMyGroupList(id);
  const filteredGroup = mainTitle?.find((item) => String(item.id) === teamId);
  if (filteredGroup === undefined) {
    throw new Error("!!");
  }
  const { data: quest } = useGetWeekPersonal(teamId);
  const { data: assignList } = useGetWeekList(Number(teamId));
  const { chatHistory, updateChatHistory, setChatHistory } = useChatStore();
  const [talk, setTalk] = useState("");
  const [cnt, setNum] = useState(0);
  console.log(quest.name);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTalk(e.target.value);
  }
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      onClick();
    }
  }
  if (isError) {
    alert(error.message);
  }
  if (isPending) {
    return <LoadingSpinner />;
  }

  async function onClick() {
    if (maxCnt <= cnt) {
      mutate(evaluateDummyData);

      setChatHistory([
        {
          talker: "ai",
          content:
            "남은 응답횟수가 모두 소모되었어요. 설명 해주신 내용을 바탕으로 피드백을 해드릴게요",
        },
      ]);
      setFinish(true);
      setTalk("");
      return;
    }

    const postData: Response = await postChatGpt(dummyData);
    setNum((prev) => prev + 1);
    // 새 대화를 추가한 후의 전체 히스토리
    updateChatHistory([
      { talker: "user", content: talk },
      { talker: "ai", content: postData.output },
    ]);

    setTalk("");
  }

  return (
    <Container>
      <LeftSection>
        <Head>{filteredGroup?.name}</Head>
        <SubTitle>
          <SubExplain>{quest.name}</SubExplain>
          <SubRule>
            학습도우미 지식 수준: 문외한 / 채팅 횟수 제한 20회 / 글자수 제한
            300자 / 마감일 9.20
          </SubRule>
        </SubTitle>
        <Spacing size={4} />
        <ChatBack>
          {chatHistory.map((item, index) => (
            <ChattingContainer
              key={index}
              user={item.talker}
              content={item.content}
              render={true}
            />
          ))}
        </ChatBack>
        {isFinish &&
          (isClassOwner() ? (
            <InsiteCard data={evaluateResponseDummyData} />
          ) : (
            <DummyReport />
          ))}

        <Control>
          <Input
            placeholder="AI에게 배운 내용 설명해주세요"
            value={talk}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
          <StyledButton onClick={onClick} />
        </Control>
      </LeftSection>

      <RightSection>
        <InfoBox>
          <InfoLabel>채팅 내용</InfoLabel>
          <br />
          {assignList &&
            assignList.map(
              (item) => (
                <ChatLink key={item.id} to={`/chatting/${teamId}/${item.id}`}>
                  {item.name}
                </ChatLink>
              ),
              []
            )}
        </InfoBox>
      </RightSection>
    </Container>
  );
}

export default Chatting;
