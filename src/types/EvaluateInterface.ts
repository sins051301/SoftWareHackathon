import { Dict } from "styled-components/dist/types";

export interface FeedbackToken {
  key: string;
  token_url: string;
  expires_at: string; // ISO 형식의 날짜 문자열
}

export interface Metadata {
  run_id: string;
  feedback_tokens: FeedbackToken[];
}

export interface ApiResponse {
  output: string;
  metadata: Metadata;
}

export interface InputEvaluateRequest {
  input: {
    Class: string;
    Focus: string;
    History: string;
    Lecture: string;
  };
  config: Dict;
  kwargs: Dict;
}
