import { create } from "zustand";
import { ChatInterface } from "./userType";

interface ChatState {
  chatHistory: ChatInterface[];
  updateChatHistory: (chatHistory: ChatInterface[]) => void;
  setChatHistory: (chatHistory: ChatInterface[]) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chatHistory: [],
  updateChatHistory: (chatHistory: ChatInterface[]) =>
    set((state) => ({
      chatHistory: [...state.chatHistory, ...chatHistory],
    })),
  setChatHistory: (chatHistory: ChatInterface[]) =>
    set({
      chatHistory: chatHistory,
    }),
}));
