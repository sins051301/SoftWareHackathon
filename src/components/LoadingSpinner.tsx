import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  z-index: 9999; /* 최상위 레이어 */
`;

const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3); /* 투명한 흰색 테두리 */
  border-top: 8px solid #3498db; /* 스피너 색상 */
  border-radius: 50%;
  width: 60px; /* 스피너 크기 */
  height: 60px; /* 스피너 크기 */
  animation: ${spin} 1s linear infinite; /* 회전 애니메이션 */
`;

const LoadingSpinner = () => {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
};

export default LoadingSpinner;
