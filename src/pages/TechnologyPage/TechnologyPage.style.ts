import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Column: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      width: 100%;

      @media screen {
        @media (min-width: 1280px) {
          height: 100%;
          width: unset;
        }
      }
    `,
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex-direction: column-reverse;
      flex: 1;
      gap: 8.53vw;

      @media screen {
        @media (min-width: 768px) {
          gap: 4.16vw;
        }

        @media (min-width: 1280px) {
          flex-direction: unset;
          gap: 2.22vw;
          padding: 3.88vw 0;
        }
      }
    `,
    Outer: styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 6.4vw;
      padding: 6.4vw 0 12.8vw;

      @media screen {
        @media (min-width: 768px) {
          gap: 3.125vw;
          padding: 5.2083vw 0;
        }

        @media (min-width: 1280px) {
          gap: 1.66vw;
          margin-top: 2.77vw;
          padding: 3.33vw 0 3.33vw 11.4583vw;
        }
      }
    `,
  },
  Pagination: styled.div`
    display: flex;
    gap: 4.26vw;
    justify-content: center;

    @media screen {
      @media (min-width: 768px) {
        gap: 2.083vw;
      }

      @media (min-width: 1280px) {
        flex-direction: column;
        gap: 2.22vw;
        justify-content: unset;
      }
    }
  `,
  SelectedTechnology: {
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 4.26vw;

      @media screen {
        @media (min-width: 768px) {
          align-items: unset;
          gap: 2.083vw;
          padding: unset;
        }

        @media (min-width: 1280px) {
          gap: 1.66vw;
        }
      }
    `,
    Outer: styled.div`
      display: flex;
      flex-direction: column;
      gap: 10.66vw;
      padding: 0 6.4vw;

      @media screen {
        @media (min-width: 768px) {
          gap: 5.2083vw;
          padding: 0 16.66vw;
        }

        @media (min-width: 1280px) {
          flex-direction: unset;
          gap: 4.44vw;
          height: 21.11vw;
          padding: unset;
        }
      }
    `,
    Texts: styled.div`
      display: flex;
      flex-direction: column;
      gap: 4.26vw;
      text-align: center;
      text-transform: uppercase;

      @media screen {
        @media (min-width: 768px) {
          gap: 2.083vw;
        }

        @media (min-width: 1280px) {
          gap: 1.11vw;
          text-align: unset;
        }
      }
    `,
  },
};

interface PaginationItemProps {
  $isSelected: boolean;
}

export const Item = {
  Pagination: styled.div<PaginationItemProps>`
    align-items: center;
    aspect-ratio: 1 / 1;
    background-color: ${({ $isSelected }) =>
      $isSelected ? Colors.White : "transparent"};
    border: 0.266vw solid
      ${({ $isSelected }) => ($isSelected ? Colors.White : Colors.White025)};
    border-radius: 50%;
    color: ${({ $isSelected }) =>
      $isSelected ? Colors.VeryDarkNavy : Colors.White};
    ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
    display: flex;
    font-family: "Bellefair", serif;
    font-size: 4.8vw;
    font-weight: 400;
    justify-content: center;
    ${({ $isSelected }) =>
      !$isSelected && "transition: border-color 0.3s ease;"};
    user-select: none;
    width: 10.66vw;

    &:hover {
      ${({ $isSelected }) => !$isSelected && `border-color: ${Colors.White};`};
    }

    @media screen {
      @media (min-width: 768px) {
        border-width: 0.13vw;
        font-size: 3.125vw;
        width: 7.29vw;
      }

      @media (min-width: 1280px) {
        border-width: 0.0694vw;
        font-size: 2.22vw;
        width: 5.55vw;
      }
    }
  `,
};

interface SelectedTechnologyPhotoProps {
  $imageUri: string;
}

export const Photo = {
  SelectedTechnology: styled.div<SelectedTechnologyPhotoProps>`
    background-image: ${({ $imageUri }) => $imageUri};
    background-position: center;
    background-size: cover;
    height: 68.8vw;
    width: 100%;

    @media screen {
      @media (min-width: 768px) {
        height: 46.35vw;
      }

      @media (min-width: 1280px) {
        aspect-ratio: 1 / 1;
        height: unset;
      }
    }
  `,
};

export const Text = {
  PageTitle: styled.span`
    color: ${Colors.White};
  `,
  PageTitleWrapper: styled.h3`
    align-items: center;
    color: ${Colors.White025};
    display: flex;
    font-family: "Barlow Condensed", sans-serif;
    font-size: 4.26vw;
    font-weight: 400;
    gap: 6.4vw;
    justify-content: center;
    letter-spacing: 1.066vw;
    padding-bottom: 17.06vw;
    text-transform: uppercase;

    @media screen {
      @media (min-width: 768px) {
        font-size: 2.6vw;
        gap: 3.125vw;
        justify-content: unset;
        letter-spacing: 0.52vw;
        padding: 0 5.2083vw 8.33vw;
      }

      @media (min-width: 1280px) {
        font-size: 1.94vw;
        gap: 1.66vw;
        letter-spacing: 0.277vw;
        padding: unset;
      }
    }
  `,
  SelectedTechnology: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-family: "Barlow", sans-serif;
      font-size: 4vw;
      font-weight: 400;
      line-height: 180%;
      text-align: center;

      @media screen {
        @media (min-width: 768px) {
          font-size: 2.083vw;
        }

        @media (min-width: 1280px) {
          font-size: 1.25vw;
          text-align: unset;
        }
      }
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-size: 7.46vw;
      font-family: "Bellefair", serif;
      font-weight: 400;

      @media screen {
        @media (min-width: 768px) {
          font-size: 5.2083vw;
        }

        @media (min-width: 1280px) {
          font-size: 3.88vw;
        }
      }
    `,
    Terminology: styled.h2`
      color: ${Colors.White05};
      font-family: "Bellefair", serif;
      font-size: 4.8vw;
      font-weight: 400;

      @media screen {
        @media (min-width: 768px) {
          font-size: 3.125vw;
        }

        @media (min-width: 1280px) {
          font-size: 2.22vw;
        }
      }
    `,
  },
};
