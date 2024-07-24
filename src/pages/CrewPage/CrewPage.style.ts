import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Column: {
      End: styled.div`
        align-items: center;
        aspect-ratio: 1 / 1;
        display: flex;
        flex: 1;
        justify-content: center;
        width: 100%;

        @media screen {
          @media (min-width: 1280px) {
            aspect-ratio: unset;
            height: 100%;
            width: unset;
          }
        }
      `,
      Start: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 6.4vw;
        height: 100%;

        @media screen {
          @media (min-width: 768px) {
            gap: 3.125vw;
          }

          @media (min-width: 1280px) {
            gap: 13.125vw;
          }
        }
      `,
    },
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 8.53vw;
      max-width: 100%;

      @media screen {
        @media (min-width: 768px) {
          align-self: center;
          gap: 4.16vw;
          padding-top: 5.2083vw;
          width: 66.6vw;
        }

        @media (min-width: 1280px) {
          align-self: unset;
          flex-direction: unset;
          gap: 2.2vw;
          padding-top: unset;
          width: unset;
        }

        @media (min-width: 1440px) {
          gap: 2.2vw;
        }
      }
    `,
    Outer: styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 6.4vw;
      padding: 6.4vw;

      @media screen {
        @media (min-width: 768px) {
          align-items: unset;
          gap: 3.125vw;
          padding: 5.2083vw 5.2083vw 0;
        }

        @media (min-width: 1280px) {
          gap: 1.66vw;
          margin-top: 3.125vw;
          padding: 3.33vw 11.4583vw;
        }
      }
    `,
  },
  Pagination: {
    Inner: styled.div`
      align-items: center;
      display: flex;
      gap: 10.66vw;
      height: 2.6vw;
      justify-content: center;

      @media screen {
        @media (min-width: 768px) {
          gap: 5.2083vw;
          height: 1.3vw;
          margin-top: 4.16vw;
        }

        @media (min-width: 1280px) {
          gap: 3.125vw;
          height: 1.171875vw;
          justify-content: unset;
          margin-top: unset;
        }
      }
    `,
    Outer: styled.div`
      width: 100%;
    `,
  },
  SelectedCrewMember: {
    Texts: {
      Inner: styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 2.13vw;
        text-transform: uppercase;

        @media screen {
          @media (min-width: 768px) {
            gap: 2.083vw;
          }

          @media (min-width: 1280px) {
            align-items: unset;
            gap: 1.11vw;
          }
        }
      `,
      Outer: styled.div`
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 6.4vw;

        @media screen {
          @media (min-width: 768px) {
            gap: 3.125vw;
          }

          @media (min-width: 1280px) {
            gap: 1.875vw;
          }

          @media (min-width: 1440px) {
            gap: 1.6vw;
          }
        }
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
    height: 100%;
    width: 100%;

    @media screen {
      @media (min-width: 1280px) {
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
    letter-spacing: 1.06vw;
    padding-bottom: 10.66vw;
    text-transform: uppercase;

    @media screen {
      @media (min-width: 768px) {
        font-size: 2.6vw;
        gap: 3.125vw;
        letter-spacing: 0.5vw;
        padding-bottom: unset;
      }

      @media (min-width: 1280px) {
        font-size: 1.9375vw;
        gap: 1.875vw;
        letter-spacing: 0.3125vw;
      }

      @media (min-width: 1440px) {
        gap: 1.6vw;
        letter-spacing: 0.27vw;
      }
    }
  `,
  SelectedCrewMember: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-family: "Barlow", sans-serif;
      font-size: 4vw;
      font-weight: 400;
      line-height: 180%;
      padding-bottom: 8.53vw;
      text-align: center;

      @media screen {
        @media (min-width: 768px) {
          font-size: 2.083vw;
          padding-bottom: unset;
        }

        @media (min-width: 1280px) {
          font-size: 1.25vw;
          text-align: unset;
        }
      }
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-family: "Bellefair", serif;
      font-size: 6.4vw;
      font-weight: 400;

      @media screen {
        @media (min-width: 768px) {
          font-size: 5.2083vw;
        }

        @media (min-width: 1280px) {
          font-size: 3.8vw;
        }
      }
    `,
    Title: styled.h3`
      color: ${Colors.White05};
      font-family: "Bellefair", serif;
      font-size: 4.8vw;
      font-weight: 400;

      @media screen {
        @media (min-width: 768px) {
          font-size: 3.125vw;
        }

        @media (min-width: 1280px) {
          font-size: 2.2vw;
        }
      }
    `,
  },
};
