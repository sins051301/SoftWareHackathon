import styled from "styled-components";
import { AIChat } from "./AIChat";
import { UserType } from "@/store/userType";
import { UserChat } from "./UserChat";

interface ChatContainerProps {
  user: UserType;
}

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  margin-bottom: 1%;
`;

const ChatProfile = styled.div<ChatContainerProps>`
  background: #d9d9d9;
  display: flex;
  flex-direction: ${(props) => (props.user === "user" ? "row-reverse" : "row")};
  width: 33px;
  height: 33px;
  border-radius: 50px;
`;

const ChatProfileContainer = styled.div<ChatContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.user === "user" ? "row-reverse" : "row")};
  position: relative;
`;

// New scrollable container
const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 500px; /* Set your desired max-height */
  overflow-y: auto;
  padding: 2px;
`;

interface ChattingProps extends ChatContainerProps {
  content: string;
  render: boolean;
}

function ChattingContainer({ content, user }: ChattingProps) {
  return (
    <>

      <ScrollableContainer>
        <ChatProfileContainer user={user}>
          <Profile>
            <ChatProfile user={user} />
            {user === "user" ? "나" : "학습 도우미"}
          </Profile>
        </ChatProfileContainer>

        <ChatProfileContainer user={user}>
          {user === "user" ? (
            <UserChat>{content}</UserChat>
          ) : (
            <AIChat text={content}></AIChat>
          )}
        </ChatProfileContainer>
      </ScrollableContainer>
    </>
  );
}

export default ChattingContainer;
