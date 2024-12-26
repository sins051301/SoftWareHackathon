export type UserType = "user" | "ai";

export interface ChatInterface {
  talker: UserType;
  content: string;
}
