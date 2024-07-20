import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Column: {
      End: styled.div`
        align-items: center;
        display: flex;
        flex: 1;
        height: 100%;
        justify-content: center;

        @media screen {
          @media (max-width: 1023px) {
            height: unset;
            width: 100%;
            aspect-ratio: 1 / 1;
          }
        }
      `,
      Start: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 201px;
        height: 100%;

        @media screen {
          @media (max-width: 1023px) {
            flex-direction: column;
            gap: 24px;
          }
        }
      `,
    },
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      gap: 2rem;
      max-width: 100%;

      @media screen {
        @media (max-width: 1279px) {
          flex-direction: column;

          @media (min-width: 768px) {
            align-self: center;
            padding-top: 40px;
            width: 512px;
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
      padding: 48px 165px;

      @media screen {
        @media (max-width: 1023px) {
          flex: 1;
          padding: 40px 40px 0;
          position: unset;

          @media (max-width: 767px) {
            align-items: center;
            padding: 1.5rem;
          }
        }
      }
    `,
  },
  Pagination: {
    Inner: styled.div`
      align-items: center;
      display: flex;
      gap: 40px;
      height: 15px;

      @media screen {
        @media (max-width: 1023px) {
          height: 10px;
          justify-content: center;
          margin-top: 36px;

          @media (max-width: 767px) {
            height: 10px;
          }
        }
      }
    `,
    Outer: styled.div`
      width: 100%;

      @media screen {
        @media (max-width: 1023px) {
          padding-bottom: unset;
          position: unset;
        }
      }
    `,
  },
  SelectedCrewMember: {
    Texts: {
      Inner: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-transform: uppercase;

        @media screen {
          @media (max-width: 1023px) {
            align-items: center;
          }
        }
      `,
      Outer: styled.div`
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 24px;
      `,
    },
  },
};

interface PaginationItemProps {
  $isSelected: boolean;
}

export const Item = {
  Pagination: styled.div<PaginationItemProps>`
    aspect-ratio: 1 / 1;
    background-color: ${({ $isSelected }) =>
      $isSelected ? Colors.White : Colors.White017};
    border-radius: 50%;
    ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
    height: 100%;

    &:hover {
      ${({ $isSelected }) =>
        !$isSelected && `background-color: ${Colors.White05};`};
    }
  `,
};

interface SelectedCrewMemberPhotoProps {
  $imageUri: string;
}

export const Photo = {
  SelectedCrewMember: styled.div<SelectedCrewMemberPhotoProps>`
    aspect-ratio: 1 / 1;
    background-image: ${({ $imageUri }) => $imageUri};
    background-size: cover;
    width: 100%;

    @media screen {
      @media (max-width: 1023px) {
        height: 100%;
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

        @media (max-width: 767px) {
          font-size: 1rem;
          padding-bottom: 40px;
        }
      }
    }
  `,
  SelectedCrewMember: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-family: "Barlow", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 180%;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 1rem;
          text-align: center;

          @media (max-width: 767px) {
            font-size: 15px;
            padding-bottom: 4rem;
          }
        }
      }
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-family: "Bellefair", serif;
      font-size: 56px;
      font-weight: 400;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 40px;

          @media (max-width: 767px) {
            font-size: 1.5rem;
          }
        }
      }
    `,
    Title: styled.h3`
      color: ${Colors.White05};
      font-family: "Bellefair", serif;
      font-size: 32px;
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
