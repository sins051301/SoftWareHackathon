import { usePostChatGpt } from "@/hooks/queries/chatgpt.query";
import { useState } from "react";
import styled from "styled-components";
import ChattingContainer from "./ChattingContainer";
import { useChatStore } from "@/store/useChatStore";
import { ChatInterface } from "@/store/userType";
import Spacing from "@/components/Spacing";

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
  position: relative;
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
  flex-direction: column;
  height: 100vh;
`;

const dummyData: ChatInterface[] = [
  {
    talker: "ai",
    content:
      " 야, 이번 수업에서 VM의 구동 방식이랑 캐싱 전략 얘기했잖아. 너는 뭐가 제일 중요하다고 생각했어?",
  },
  {
    talker: "user",
    content:
      "VM은 소프트 웨어가 마치 하드웨어인것처럼 흉내를 내서 운영체제를 올리는 구조이기때문에 메모리 캐싱 전략이 조금 다르게 돌아가. 또한 사용가능한 메모리 수준도 제약이 있기때문에 하드웨어를 메모리처럼 사용하고 이과정에서 메모리에 블록단위로 캐싱을 하고있어.",
  },
  {
    talker: "ai",
    content:
      "오, 그럼 VM에서는 하드웨어 자원이 실제 메모리처럼 쓰이니까 효율적인 캐싱이 더 중요하겠네? 블록 단위로 캐싱한다는 건 작은 데이터 덩어리들을 한 번에 처리해서 속도를 높이는 느낌인가 보지? 그런데 블록 크기를 어떻게 정하는지가 성능에 영향을 미칠 것 같은데, 그런 얘기도 했어?",
  },
];

export function Chatting() {
  const [title] = useState("현대과학의 초대");
  const [chathistory, setChatHistory] = useState(dummyData);
  //const { chatHistory, setChatHistory, updateChatHistory } = useChatStore();
  const [talk, setTalk] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTalk(e.target.value);
  }

  function onClick() {
    setChatHistory((prev) => [
      ...prev,
      {
        talker: "user",
        content: talk,
      },
      {
        talker: "ai",
        content:
          "그렇구나! 그러면 블록 크기를 동적으로 조정할 수 있는 기능도 VM에 탑재되어 있나? 아니면 고정된 크기로 운영되는 경우가 더 많아?",
      },
    ]);
    setTalk("");
  }

  return (
    <Container>
      <Head>{title}</Head>
      <SubTitle>
        <SubExplain>
          과제3: 3주차에 배운 내용을 학습 도우미에게 설명해주세요
        </SubExplain>
        <SubRule>
          학습도우미 지식 수준: 문외한 / 채팅 횟수 제한 20회 / 글자수 제한 300자
          / 마감일 9.20
        </SubRule>
      </SubTitle>
      <Spacing size={4} />
      <ChatBack>
        {chathistory.map((item, index) => (
          <ChattingContainer
            key={index}
            user={item.talker}
            content={item.content}
            render={true}
          />
        ))}
      </ChatBack>

      <Control>
        <Input
          placeholder="AI에게 배운 내용 설명해주세요"
          value={talk}
          onChange={onChange}
        />
        <StyledButton onClick={onClick} />
      </Control>
    </Container>
  );
}

export default Chatting;
