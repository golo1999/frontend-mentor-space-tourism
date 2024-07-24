import { MdClose, MdMenu } from "react-icons/md";
import styled, { css } from "styled-components";

import { Colors, Icons } from "environment";

interface ListContainerProps {
  $isMenuOpen: boolean;
}

export const Container = {
  Icon: {
    Menu: {
      Close: styled.li`
        display: flex;
        justify-content: flex-end;
        padding: 8.53vw 6.4vw 8.53vw 0;
        width: 100%;
      `,
      Open: styled.div`
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: flex-end;
      `,
    },
  },
  List: styled.div<ListContainerProps>`
    ${({ $isMenuOpen }) =>
      $isMenuOpen &&
      css`
        inset: 0;
        position: absolute;
        z-index: 9999;
      `};

    @media screen {
      @media (min-width: 768px) {
        flex: 1;
        inset: unset;
        position: unset;
        z-index: unset;
      }
    }
  `,
  ListItems: styled.div`
    display: flex;
    flex-direction: column;
    gap: 8.53vw;
    width: 100%;

    @media screen {
      @media (min-width: 768px) {
        flex-direction: unset;
        gap: 6.25vw;
        height: 100%;
        justify-content: flex-end;
      }

      @media (min-width: 1280px) {
        gap: 3.75vw;
      }

      @media (min-width: 1440px) {
        gap: 3.33vw;
      }
    }
  `,
  Main: styled.nav`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 6.4vw;

    @media screen {
      @media (min-width: 768px) {
        justify-content: unset;
        padding: unset;
      }

      @media (min-width: 1280px) {
        height: 7.5vw;
        position: relative;
        top: 3.125vw;
      }

      @media (min-width: 1440px) {
        height: 6.67vw;
        top: 2.77vw;
      }
    }
  `,
  Start: styled.div`
    align-items: center;
    display: flex;
    flex: 1;

    @media screen {
      @media (min-width: 768px) {
        flex: unset;
        padding: 0 5.20833vw;
      }

      @media (min-width: 1280px) {
        gap: 5vw;
        left: 0;
        padding: 0 0 0 5vw;
        position: absolute;
        top: 1.875vw;
        width: 51.1vw;
        z-index: 1;
      }

      @media (min-width: 1440px) {
        gap: 4.44vw;
        padding: 0 0 0 4.44vw;
        top: 1.66vw;
      }
    }
  `,
};

interface LogoIconProps {
  $isHomeRoute: boolean;
}

interface OpenMenuIconProps {
  $isMenuOpen: boolean;
}

export const Icon = {
  Logo: styled(Icons.Logo)<LogoIconProps>`
    ${({ $isHomeRoute }) => !$isHomeRoute && "cursor: pointer;"};
    height: 10.661vw;
    width: 10.661vw;

    @media screen {
      @media (min-width: 768px) {
        height: 6.25vw;
        width: 6.25vw;
      }

      @media (min-width: 1280px) {
        height: 3.75vw;
        width: 3.75vw;
      }

      @media (min-width: 1440px) {
        height: 4vw;
        width: 4vw;
      }
    }
  `,
  Menu: {
    Close: styled(MdClose)`
      cursor: pointer;
      height: 6.4vw;
      width: 6.4vw;
    `,
    Open: styled(MdMenu)<OpenMenuIconProps>`
      cursor: pointer;
      height: 10.661vw;
      opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0 : 1)};
      transition: opacity 0.5s ease;
      width: 10.661vw;
    `,
  },
};

interface ListProps {
  $isMenuOpen: boolean;
}

export const List = styled.ul<ListProps>`
  align-items: center;
  backdrop-filter: blur(10.67vw);
  background-color: ${Colors.VeryDarkNavy015};
  bottom: 0;
  color: ${Colors.White};
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12.8vw;
  list-style-type: none;
  padding: 0 0 0 8.53vw;
  position: absolute;
  right: 0;
  top: 0;
  transform: ${({ $isMenuOpen }) =>
    !$isMenuOpen ? "translateX(67.73vw)" : "translateX(0)"};
  transition: transform 0.5s ease;
  user-select: none;
  width: 67.73vw;
  z-index: 9999;

  @media screen {
    @media (min-width: 768px) {
      backdrop-filter: blur(5.2083vw);
      background-color: ${Colors.White004};
      bottom: unset;
      flex-direction: unset;
      height: 12.5vw;
      justify-content: flex-end;
      padding: 0 5.20833vw;
      position: unset;
      transform: unset;
      transition: unset;
      width: unset;
      z-index: unset;
    }

    @media (min-width: 1280px) {
      backdrop-filter: blur(3.125vw);
      flex: unset;
      height: 7.5vw;
      padding: 0 5vw;
      position: absolute;
      width: 51.1vw;
    }

    @media (min-width: 1440px) {
      backdrop-filter: blur(2.77vw);
      height: 6.67vw;
      padding: 0 4.44vw;
    }
  }
`;

interface ListItemProps {
  $isSelected: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  align-items: center;
  border-right: ${({ $isSelected }) =>
    `0.8vw solid ${$isSelected ? Colors.White : "transparent"}`};
  ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
  display: flex;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 4.2644vw;
  font-weight: 700;
  gap: 3.2vw;
  height: 5.067vw;
  letter-spacing: 0.53vw;
  ${({ $isSelected }) =>
    !$isSelected && "transition: border-right-color 0.2s ease;"};
  width: 100%;

  &:hover {
    ${({ $isSelected }) =>
      !$isSelected && `border-right-color: ${Colors.White05};`};
  }

  @media screen {
    @media (min-width: 768px) {
      border-bottom: ${({ $isSelected }) =>
        `0.4vw solid ${$isSelected ? Colors.White : "transparent"}`};
      border-right: unset;
      font-size: 2.083vw;
      gap: 1.5625vw;
      height: 100%;
      letter-spacing: 0.26vw;
      ${({ $isSelected }) =>
        !$isSelected && "transition: border-bottom-color 0.2s ease;"};
      width: unset;

      &:hover {
        ${({ $isSelected }) =>
          !$isSelected && `border-bottom-color: ${Colors.White05};`};
      }
    }

    @media (min-width: 1280px) {
      border-bottom-width: 0.25vw;
      font-size: 1.25vw;
      gap: 0.9375vw;
      letter-spacing: 0.15625vw;
    }

    @media (min-width: 1440px) {
      border-bottom-width: 0.208vw;
      font-size: 1.1vw;
      gap: 0.8vw;
      letter-spacing: 0.138vw;
    }
  }
`;

export const Text = {
  ListItem: {
    Name: styled.span`
      font-weight: 400;
    `,
  },
};
