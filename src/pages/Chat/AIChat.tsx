import { useState, useEffect } from "react";
import styled from "styled-components";

const AIChatContainer = styled.div`
  background-color: #e33a3db2;
  color: white;
  padding: 1%;
  font-size: medium;
  border-radius: 0px 15px 15px 15px;
  width: 20rem;
  max-height: 30rem;
  white-space: pre-wrap;
  letter-spacing: 0.15em;
  margin: 0;
`;

interface AIChatProps {
  text: string;
}

export function AIChat({ text }: AIChatProps) {
  const [displayText, setDisplayText] = useState("");
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx < text.length) {
        setDisplayText((prev) => prev + text[idx]);
        setIdx((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text, idx]);

  return <AIChatContainer>{displayText}</AIChatContainer>;
}
