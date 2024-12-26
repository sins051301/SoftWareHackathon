import { memo } from "react";
import styled from "styled-components";

type Direction = "horizontal" | "vertical";

interface SpacingProps {
  direction?: Direction;
  size: number;
  className?: string;
}

const StyledSpacing = styled.div<SpacingProps>`
  ${({ direction = "vertical", size }) =>
    direction === "vertical" ? `height: ${size}rem;` : `width: ${size}rem;`}
`;

function Spacing({
  size,
  direction = "vertical",
  className,
  ...props
}: SpacingProps) {
  return (
    <StyledSpacing
      size={size}
      direction={direction}
      className={className}
      {...props}
    />
  );
}

export default memo(Spacing);
