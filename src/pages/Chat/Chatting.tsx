import { useState, useEffect } from "react";
import postChatGpt from "@/api/postChatGpt";
import styled from "styled-components";
import ChattingContainer from "./ChattingContainer";
import { useChatStore } from "@/store/useChatStore";
import { InputChatRequest } from "@/types/ChatInterface";
import { Response } from "@/types/ChatInterface";
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

const dummyData: InputChatRequest = {
  input: {
    Class: "컴퓨터구조",
    Lecture: "[2주차] VM의 구동원리와 캐싱 방식",
    Level: "하",
    history:
      "AI: 안녕! 이번 수업에서 어떤 내용이 중요하다고 생각해? VM의 구동원리와 캐싱 방식에 대해 좀 더 알고 싶어!\n나영채: VM은 캐싱 방식이 조금 특이한데 VM은 운영체제를 흉내내도록 만들어져서 하드디스크를 캐싱해.",
  },
  config: {},
  kwargs: {},
};

export function Chatting() {
  const [title] = useState("현대과학의 초대");

  const { chatHistory, setChatHistory, updateChatHistory } = useChatStore();

  const [talk, setTalk] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTalk(e.target.value);
  }

  async function onClick() {
    const data: Response = await postChatGpt(dummyData);

    // 새 데이터를 chatHistory에 추가
    updateChatHistory([
      { talker: "user", content: talk },
      { talker: "ai", content: data.output },
    ]);
    setTalk(""); // 입력을 비웁니다.
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
        {chatHistory.map((item, index) => (
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
