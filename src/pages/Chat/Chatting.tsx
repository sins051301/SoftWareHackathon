import { usePostChatGpt } from "@/hooks/queries/chatgpt.query";
import { ChatRequest } from "@/types/ChatInterface";
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

const ChattingBack = styled.div`
  width: 100vw;
  height: 100vh;
`;

export function Chatting() {
  const { mutate, data, isError, error } = usePostChatGpt();
  if (isError) {
    alert(error?.message);
  }
  return (
    <ChattingBack>
      <button onClick={() => mutate(dummyData)}>요청</button>
      <div>{data ? data : "데이터를 기다리는 중..."}</div>
    </ChattingBack>
  );
}
export default Chatting;
