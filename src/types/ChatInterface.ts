export interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  model: string;
  messages: Message[];
}

export interface Input {
  Class: string;
  Lecture: string;
  Level: string;
  history: string;
}
