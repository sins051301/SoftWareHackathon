import { create } from "zustand";
import { ChatInterface } from "./userType";
import { createJSONStorage, persist } from "zustand/middleware";

const dummyData: ChatInterface[] = [
  { talker: "ai", content: "fsufhsfhsajkhzhjsafhashjufahighui" },
  { talker: "user", content: "fsufhsfhsajkhzhjsa" },
  { talker: "ai", content: "fsufhsfhsajkhzhjsafhashjufahighui" },
  { talker: "user", content: "fsfhsfhsajkhzhj" },
];

interface ChatState {
  chatHistory: ChatInterface[];
  updateChatHistory: (chatHistory: ChatInterface[]) => void;
  setChatHistory: (chatHistory: ChatInterface[]) => void;
}

export const useChatStore = create(
  persist<ChatState>(
    (set) => ({
      chatHistory: dummyData,
      updateChatHistory: (chatHistory: ChatInterface[]) =>
        set((state) => ({
          chatHistory: [...state.chatHistory, ...chatHistory],
        })),
      setChatHistory: (chatHistory: ChatInterface[]) =>
        set({
          chatHistory: chatHistory,
        }),
    }),
    {
      name: "chatHistoryStorage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
