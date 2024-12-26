import { Dict } from "styled-components/dist/types";

export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  model: string;
  messages: Message[];
}

export interface InputChatRequest {
  input: {
    Class: string;
    Lecture: string;
    Level: string;
    History: string;
  };
  config: Dict;
  kwargs: Dict;
}

export interface Metadata {
  run_id: string;
  feedback_tokens: unknown[]; // feedback_tokens의 실제 타입에 따라 적절히 수정하세요.
}

export interface Response {
  output: string;
  metadata: Metadata;
}
