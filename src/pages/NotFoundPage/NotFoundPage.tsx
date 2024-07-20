import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Colors } from "environment";

const Container = styled.div`
  left: 165px;
  position: absolute;
  right: 165px;
  top: 184px;
`;

const Text = styled.h3`
  color: ${Colors.LightBlue};
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  font-weight: 400;
`;

export function NotFoundPage() {
  const { pathname } = useLocation();

  const message = `The requested page "${pathname}" could not be found.`;

  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
}
