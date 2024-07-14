import styled from "styled-components";

import { Colors, Icons } from "environment";

export const Container = {
  Main: styled.nav`
    align-items: center;
    display: flex;
    height: 6rem;
    position: relative;
    top: 40px;
  `,
  Start: styled.div`
    align-items: center;
    display: flex;
    gap: 69px;
    left: 0;
    padding-left: 69px;
    position: absolute;
    top: 24px;
    width: 46rem;
    z-index: 1;
  `,
};

interface LogoIconProps {
  $isHomeRoute: boolean;
}

export const Icon = {
  Logo: styled(Icons.Logo)<LogoIconProps>`
    ${({ $isHomeRoute }) => !$isHomeRoute && "cursor: pointer;"};
  `,
};

export const List = styled.ul`
  align-items: center;
  backdrop-filter: blur(2.5rem);
  background-color: ${Colors.White004};
  color: ${Colors.White};
  display: flex;
  gap: 3rem;
  height: 96px;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0 4rem;
  position: absolute;
  right: 0;
  top: 0;
  user-select: none;
  width: 736px;
`;

interface ListItemProps {
  $isSelected: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  align-items: center;
  border-bottom: ${({ $isSelected }) =>
    `3px solid ${$isSelected ? Colors.White : "transparent"}`};
  ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
  display: flex;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  gap: 0.75rem;
  height: 100%;
  letter-spacing: 2px;
  ${({ $isSelected }) =>
    !$isSelected && "transition: border-bottom-color 0.3s ease;"};

  &:hover {
    ${({ $isSelected }) =>
      !$isSelected && `border-bottom-color: ${Colors.White05};`};
  }
`;

export const Text = {
  ListItem: {
    Name: styled.span`
      font-weight: 400;
    `,
  },
};
