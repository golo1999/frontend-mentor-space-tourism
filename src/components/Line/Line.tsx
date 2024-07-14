import styled from "styled-components";

import { Colors } from "environment";

interface StyledLineProps {
  $width: string;
}

const StyledLine = styled.div<StyledLineProps>`
  background-color: ${Colors.White};
  height: 1px;
  opacity: 20%;
  width: ${({ $width }) => $width};
`;

interface Props {
  width?: string;
}

export function Line({ width = "100%" }: Props) {
  return <StyledLine $width={width} />;
}
