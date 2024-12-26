import { useState } from "react";
import postChatGpt from "@/api/postChatGpt";
import styled from "styled-components";
import ChattingContainer from "./ChattingContainer";
import { useChatStore } from "@/store/useChatStore";
import { Response } from "@/types/ChatInterface";
import Spacing from "@/components/Spacing";
import { useGetWeek } from "@/hooks/queries/week.query";
import { useParams } from "react-router-dom";
import { useGetMyGroupList } from "@/hooks/queries/group.query";
import { getUserId } from "@/utils/auth";
import { usePostEvaluate } from "@/hooks/queries/chatgpt.query";
import LoadingSpinner from "@/components/LoadingSpinner";

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

const maxCnt = 1;

export function Chatting() {
  const { teamId } = useParams();
  const id = getUserId() ?? "1";
  const {
    mutate,
    isPending,
    isError,
    error,
    data: lastData,
  } = usePostEvaluate();
  const { data: mainTitle } = useGetMyGroupList(id);
  const filteredGroup = mainTitle?.find((item) => String(item.id) === teamId);
  if (filteredGroup === undefined) {
    throw new Error("!!");
  }
  const { data: quest } = useGetWeek(teamId);
  const { chatHistory, updateChatHistory, setChatHistory } = useChatStore();
  const [talk, setTalk] = useState("");
  const [cnt, setNum] = useState(0);

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
  console.log(lastData);

  async function onClick() {
    if (maxCnt <= cnt) {
      const lastHistory = chatHistory
        .map(
          (item) => `${item.talker === "ai" ? "AI" : "User"}: ${item.content}`
        )
        .join("\n");

      // mutate({
      //   input: {
      //     Class: filteredGroup?.name || "",
      //     Lecture: quest.name,
      //     Level: "하",
      //     History: lastHistory,
      //   },
      //   config: {},
      //   kwargs: {},
      // });

      setChatHistory([
        {
          talker: "ai",
          content:
            "남은 응답횟수가 모두 소모되었어요. 설명 해주신 내용을 바탕으로 피드백을 해드릴게요",
        },
        {
          talker: "ai",
          content: lastData.output,
        },
      ]);
      setTalk("");
      return;
    }
    // 이전 히스토리 + 새로운 유저 입력을 포함한 히스토리 생성
    const currentHistory = [...chatHistory, { talker: "user", content: talk }]
      .map((item) => `${item.talker === "ai" ? "AI" : "User"}: ${item.content}`)
      .join("\n");

    const data: Response = await postChatGpt({
      input: {
        Class: filteredGroup?.name || "",
        Lecture: quest.name,
        Level: "하",
        History: currentHistory,
      },
      config: {},
      kwargs: {},
    });
    setNum((prev) => prev + 1);
    // 새 대화를 추가한 후의 전체 히스토리
    updateChatHistory([
      { talker: "user", content: talk },
      { talker: "ai", content: data.output },
    ]);

    setTalk("");
  }

  return (
    <Container>
      <Head>{filteredGroup?.name}</Head>
      <SubTitle>
        <SubExplain>{quest.name}</SubExplain>
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
          onKeyDown={onKeyDown}
        />
        <StyledButton onClick={onClick} />
      </Control>
    </Container>
  );
}

export default Chatting;
