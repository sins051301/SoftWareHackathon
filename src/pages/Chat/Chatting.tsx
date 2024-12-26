import { usePostChatGpt } from "@/hooks/queries/chatgpt.query";
import { ChatRequest } from "@/types/ChatInterface";
import { useState } from "react";
import styled from "styled-components";

const dummyData: ChatRequest = {
  model: "gpt-4",
  messages: [
    {
      role: "system",
      content: "You are a helpful assistant.",
    },
    {
      role: "user",
      content: "노래하나 만들어줘",
    },
  ],
};

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

export function Chatting() {
  const [title] = useState("현대과학의 초대");
  const { mutate, data, isError, error } = usePostChatGpt();
  if (isError) {
    alert(error?.message);
  }
  return (
    <>
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
      <button onClick={() => mutate(dummyData)}>요청</button>
      <div>{data ? data : "데이터를 기다리는 중..."}</div>
    </>
  );
}
export default Chatting;
