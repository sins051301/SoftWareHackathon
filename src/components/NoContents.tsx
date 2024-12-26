import styled from 'styled-components';
import ErrorSvg from '@/assets/noContents.svg?react';


// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 50px 0;
  
  p {
    font-size: 20px;
    font-weight: 600;
    color: #D8D8D8;
  }
`;

interface NoContentsProps {
  message?: string;
}

const NoContents = ({message}: NoContentsProps) => {
  return (
    <Container>
      <ErrorSvg />
      <p>{message}</p>
    </Container>
  );
}

export default NoContents;