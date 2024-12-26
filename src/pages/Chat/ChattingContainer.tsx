// import styled from "styled-components";
// import { AIChat } from "./AIChat";
// import { UserType } from "@/types/userType";
// import { UserChat } from "./UserChat";

// interface ChatContainerProps {
//   user: UserType;
// }

// const ChatProfile = styled.div`
//   background: #d9d9d9;
//   width: 33px;
//   height: 33px;
//   border-radius: 50px;
// `;

// const ChatProfileContainer = styled.div<ChatContainerProps>`
//   display: flex;
//   flex-direction: ${(props) => (props.user === "user" ? "row-reverse" : "row")};
//   position: relative;
// `;

// interface ChattingProps extends ChatContainerProps {
//   content: string;
//   render: boolean;
// }

// function ChattingContainer({ content, user, render }: ChattingProps) {
//   return (
//     <ChatProfileContainer user={user}>
//       <ChatProfile />
//       {user === "user" ? (
//         <UserChat>{content}</UserChat>
//       ) : (
//         <AIChat text={content} render={render}></AIChat>
//       )}
//     </ChatProfileContainer>
//   );
// }
// export default ChattingContainer;
