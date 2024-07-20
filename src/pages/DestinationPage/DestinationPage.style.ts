import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      gap: 2rem;
      max-width: 100%;
      padding-top: 133px;

      @media screen {
        @media (max-width: 1279px) {
          flex-direction: column;
          padding-top: unset;
        }
      }
    `,
    Outer: styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 24px;
      margin-top: 40px;
      padding: 48px 181px 165px;

      @media screen {
        @media (max-width: 1023px) {
          flex: 1;
          padding: 40px;
          position: unset;

          @media (max-width: 767px) {
            align-items: center;
            padding: 1.5rem;
          }
        }
      }
    `,
  },
  Destination: {
    Details: {
      Column: styled.div`
        align-items: center;
        display: flex;
        flex: 1;
        height: 100%;
        justify-content: center;
        max-width: 100%;
      `,
    },
  },
  SelectedDestination: {
    Details: styled.div`
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 445px;

      @media screen {
        @media (max-width: 1023px) {
          gap: 24px;

          @media (min-width: 768px) {
            width: 514px;
          }
        }
      }
    `,
    Statistics: {
      Column: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 12px;
      `,
      Outer: styled.div`
        align-items: center;
        display: flex;
        gap: 24px;
        text-transform: uppercase;

        @media screen {
          @media (max-width: 767px) {
            flex-direction: column;
            text-align: center;
          }
        }
      `,
    },
    Texts: styled.div`
      display: flex;
      flex-direction: column;
      gap: 16px;

      @media screen {
        @media (max-width: 1023px) {
          text-align: center;
        }
      }
    `,
  },
};

export const List = {
  Destinations: styled.ul`
    align-items: center;
    color: ${Colors.LightBlue};
    display: flex;
    font-size: 16px;
    gap: 2rem;
    height: 2rem;
    list-style-type: none;
    text-transform: uppercase;
    user-select: none;

    @media screen {
      @media (max-width: 1023px) {
        justify-content: center;

        @media (min-width: 768px) {
          margin-top: 2rem;
        }
      }
    }
  `,
};

interface DestinationsListItemProps {
  $isSelected: boolean;
}

export const ListItem = {
  Destinations: styled.li<DestinationsListItemProps>`
    border-bottom: ${({ $isSelected }) =>
      `3px solid ${$isSelected ? Colors.White : "transparent"}`};
    color: ${({ $isSelected }) => ($isSelected ? Colors.White : "inherit")};
    ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    height: 100%;
    letter-spacing: 2px;
    ${({ $isSelected }) => !$isSelected && "transition: 0.3s ease;"};

    &:hover {
      ${({ $isSelected }) =>
        !$isSelected && `border-bottom-color: ${Colors.White05};`};
      ${({ $isSelected }) => !$isSelected && `color: ${Colors.White};`};
    }

    @media screen {
      @media (max-width: 767px) {
        font-size: 14px;
      }
    }
  `,
};

interface SelectedDestinationPhotoProps {
  $imageUri: string;
}

export const Photo = {
  SelectedDestination: styled.div<SelectedDestinationPhotoProps>`
    aspect-ratio: 1 / 1;
    background-image: ${({ $imageUri }) => $imageUri};
    background-size: cover;
    border-radius: 50%;
    width: 30rem;

    @media screen {
      @media (max-width: 1023px) {
        width: 300px;

        @media (max-width: 767px) {
          width: 150px;
        }
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
        margin-bottom: 2rem;

        @media (max-width: 767px) {
          font-size: 1rem;
        }
      }
    }
  `,
  SelectedDestination: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-family: "Barlow", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 180%;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 1rem;

          @media (max-width: 767px) {
            font-size: 15px;
          }
        }
      }
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-family: "Bellefair", serif;
      font-size: 100px;
      font-weight: 400;
      text-transform: uppercase;

      @media screen {
        @media (max-width: 1023px) {
          font-size: 80px;

          @media (max-width: 767px) {
            font-size: 56px;
          }
        }
      }
    `,
    Statistics: {
      Key: styled.p`
        color: ${Colors.LightBlue};
        font-family: "Barlow Condensed", sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 2px;
      `,
      Value: styled.p`
        color: ${Colors.White};
        font-family: "Bellefair", serif;
        font-size: 28px;
        font-weight: 400;
      `,
    },
  },
};
