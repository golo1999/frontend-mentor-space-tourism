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
        padding: 2rem 1.5rem 2rem 0;
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
      }
    }
  `,
  ListItems: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    @media screen {
      @media (min-width: 768px) {
        flex-direction: unset;
        gap: 3rem;
        height: 100%;
        justify-content: flex-end;
      }
    }
  `,
  Main: styled.nav`
    align-items: center;
    display: flex;
    height: 6rem;
    position: relative;
    top: 40px;

    @media screen {
      @media (max-width: 1279px) {
        height: unset;
        position: unset;

        @media (max-width: 767px) {
          justify-content: space-between;
          padding: 24px;
          height: unset;
        }
      }
    }
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

    @media screen {
      @media (max-width: 1279px) {
        padding: 0 40px;
        position: unset;
        width: unset;
        z-index: unset;

        @media (max-width: 767px) {
          flex: 1;
          padding: unset;
        }
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

    @media screen {
      @media (max-width: 767px) {
        height: 40px;
        width: 40px;
      }
    }
  `,
  Menu: {
    Close: styled(MdClose)`
      cursor: pointer;
    `,
    Open: styled(MdMenu)<OpenMenuIconProps>`
      cursor: pointer;
      opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? 0 : 1)};
      transition: opacity 0.5s ease;
    `,
  },
};

interface ListProps {
  $isMenuOpen: boolean;
}

export const List = styled.ul<ListProps>`
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
  width: 46rem;

  @media screen {
    @media (max-width: 1279px) {
      flex: 1;
      padding: 0 40px;
      position: unset;
      width: unset;

      @media (max-width: 767px) {
        background-color: ${Colors.VeryDarkNavy015};
        bottom: 0;
        flex-direction: column;
        gap: 3rem;
        height: unset;
        justify-content: unset;
        padding: 0 0 0 2rem;
        position: absolute;
        width: 254px;
        z-index: 9999;
        transform: ${({ $isMenuOpen }) =>
          !$isMenuOpen ? "translateX(254px)" : "translateX(0)"};
        transition: transform 0.5s ease;
      }
    }
  }
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
    !$isSelected && "transition: border-bottom-color 0.2s ease;"};

  &:hover {
    ${({ $isSelected }) =>
      !$isSelected && `border-bottom-color: ${Colors.White05};`};
  }

  @media screen {
    @media (max-width: 767px) {
      border-bottom: unset;
      border-right: ${({ $isSelected }) =>
        `3px solid ${$isSelected ? Colors.White : "transparent"}`};
      height: 19px;
      width: 100%;

      ${({ $isSelected }) =>
        !$isSelected && "transition: border-right-color 0.2s ease;"};

      &:hover {
        ${({ $isSelected }) =>
          !$isSelected && `border-right-color: ${Colors.White05};`};
      }
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
