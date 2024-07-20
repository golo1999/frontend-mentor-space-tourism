import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Column: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      height: 100%;

      @media screen {
        @media (max-width: 1023px) {
          width: 100%;
          height: unset;
        }
      }
    `,
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      gap: 2rem;
      padding: 56px 0;

      @media screen {
        @media (max-width: 1023px) {
          flex-direction: column-reverse;
          padding: unset;

          @media (min-width: 768px) {
            gap: 24px;
          }
        }
      }
    `,
    Outer: styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 24px;
      margin-top: 40px;
      padding: 48px 0 48px 165px;

      @media screen {
        @media (max-width: 1023px) {
          flex: 1;
          padding: 40px 0;
          position: unset;

          @media (max-width: 767px) {
            padding: 1.5rem 0 3rem;
          }
        }
      }
    `,
  },
  Pagination: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen {
      @media (max-width: 1023px) {
        flex-direction: unset;
        gap: 1rem;
        justify-content: center;
      }
    }
  `,
  SelectedTechnology: {
    Inner: styled.div`
      display: flex;
      flex-direction: column;
      gap: 24px;

      @media screen {
        @media (max-width: 1023px) {
          padding: 0 88px;

          @media (max-width: 767px) {
            align-items: center;
            padding: 0 24px;
          }
        }
      }
    `,
    Outer: styled.div`
      display: flex;
      gap: 4rem;
      height: 304px;

      @media screen {
        @media (max-width: 1023px) {
          flex-direction: column;
          gap: 40px;
          height: unset;

          @media (min-width: 768px) {
            padding: 0 40px;
          }
        }
      }
    `,
    Texts: styled.div`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-transform: uppercase;

      @media screen {
        @media (max-width: 1023px) {
          text-align: center;
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
    border: 1px solid
      ${({ $isSelected }) => ($isSelected ? Colors.White : Colors.White025)};
    border-radius: 50%;
    color: ${({ $isSelected }) =>
      $isSelected ? Colors.VeryDarkNavy : Colors.White};
    ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
    display: flex;
    font-family: "Bellefair", serif;
    font-size: 2rem;
    font-weight: 400;
    justify-content: center;
    ${({ $isSelected }) =>
      !$isSelected && "transition: border-color 0.3s ease;"};
    user-select: none;
    width: 80px;

    &:hover {
      ${({ $isSelected }) => !$isSelected && `border-color: ${Colors.White};`};
    }

    @media screen {
      @media (max-width: 1023px) {
        font-size: 24px;
        width: 56px;

        @media (max-width: 767px) {
          font-size: 18px;
          width: 40px;
        }
      }
    }
  `,
};

interface SelectedTechnologyPhotoProps {
  $imageUri: string;
}

export const Photo = {
  SelectedTechnology: styled.div<SelectedTechnologyPhotoProps>`
    aspect-ratio: 1 / 1;
    background-image: ${({ $imageUri }) => $imageUri};
    background-position: center;
    background-size: cover;
    width: 100%;

    @media screen {
      @media (max-width: 1023px) {
        aspect-ratio: unset;
        height: 357px;
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
    font-size: 28px;
    font-weight: 400;
    gap: 24px;
    letter-spacing: 4px;
    text-transform: uppercase;

    @media screen {
      @media (max-width: 1023px) {
        font-size: 20px;
        padding: 0 40px;

        @media (max-width: 767px) {
          font-size: 1rem;
          justify-content: center;
          padding-bottom: 21px;
        }
      }
    }
  `,
  SelectedTechnology: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-size: 18px;
      font-family: "Barlow", sans-serif;
      font-weight: 400;
      line-height: 180%;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 1rem;
          text-align: center;

          @media (max-width: 767px) {
            font-size: 15px;
          }
        }
      }
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-size: 56px;
      font-family: "Bellefair", serif;
      font-weight: 400;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 40px;

          @media (max-width: 767px) {
            font-size: 28px;
          }
        }
      }
    `,
    Terminology: styled.h2`
      color: ${Colors.White05};
      font-family: "Bellefair", serif;
      font-size: 2rem;
      font-weight: 400;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 24px;

          @media (max-width: 767px) {
            font-size: 18px;
          }
        }
      }
    `,
  },
};
