import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 8.53vw;
      max-width: 100%;

      @media screen {
        @media (min-width: 768px) {
          gap: 4.16vw;
        }

        @media (min-width: 1280px) {
          flex-direction: unset;
          gap: 2.5vw;
          padding-top: 10.4vw;
        }

        @media (min-width: 1440px) {
          gap: 2.22vw;
          padding-top: 9.23vw;
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
          padding: 5.21vw;
        }

        @media (min-width: 1280px) {
          gap: 1.875vw;
          margin-top: 3.125vw;
          padding: 3.75vw 11.4583vw 12.5694vw;
        }

        @media (min-width: 1440px) {
          gap: 1.66vw;
          margin-top: 2.77vw;
          padding: 3.33vw 12.57vw 11.46vw;
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

        &:first-child {
          @media screen {
            @media (min-width: 1280px) {
              padding: 0 2.04861vw;
            }
          }
        }
        &:last-child {
          @media screen {
            @media (min-width: 1280px) {
              padding: 0 3.2638vw;
            }
          }
        }
      `,
    },
  },
  SelectedDestination: {
    Details: styled.div`
      display: flex;
      flex-direction: column;
      gap: 6.4vw;

      @media screen {
        @media (min-width: 768px) {
          gap: 3.125vw;
          width: 67vw;
        }

        @media (min-width: 1280px) {
          width: 34.76vw;
        }

        @media (min-width: 1440px) {
          gap: 2.77vw;
          width: 31vw;
        }
      }
    `,
    Statistics: {
      Column: styled.div`
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 3.2vw;

        @media screen {
          @media (min-width: 768px) {
            align-items: center;
            gap: 1.5625vw;
          }

          @media (min-width: 1280px) {
            align-items: unset;
            gap: 0.9375vw;
          }

          @media (min-width: 1440px) {
            gap: 0.83vw;
          }
        }
      `,
      Outer: styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 6.4vw;
        text-align: center;
        text-transform: uppercase;

        @media screen {
          @media (min-width: 768px) {
            flex-direction: unset;
            gap: 3.125vw;
            text-align: unset;
          }

          @media (min-width: 1280px) {
            gap: 1.875vw;
          }

          @media (min-width: 1440px) {
            gap: 1.67vw;
          }
        }
      `,
    },
    Texts: styled.div`
      display: flex;
      flex-direction: column;
      gap: 4.26vw;
      text-align: center;

      @media screen {
        @media (min-width: 768px) {
          gap: 2.083vw;
        }

        @media (min-width: 1280px) {
          gap: 1.25vw;
          text-align: unset;
        }

        @media (min-width: 1440px) {
          gap: 1.11vw;
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
    font-size: 4.26vw;
    gap: 8.53vw;
    height: 8.53vw;
    justify-content: center;
    list-style-type: none;
    text-transform: uppercase;
    user-select: none;

    @media screen {
      @media (min-width: 768px) {
        font-size: 2.083vw;
        gap: 4.16vw;
        height: 4.16vw;
        margin-top: 4.16vw;
      }

      @media (min-width: 1280px) {
        font-size: 1.25vw;
        gap: 2.5vw;
        height: 2.5vw;
        justify-content: unset;
        margin-top: unset;
      }

      @media (min-width: 1440px) {
        font-size: 1.11vw;
        gap: 2.22vw;
        height: 2.22vw;
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
      `0.8vw solid ${$isSelected ? Colors.White : "transparent"}`};
    color: ${({ $isSelected }) => ($isSelected ? Colors.White : "inherit")};
    ${({ $isSelected }) => !$isSelected && "cursor: pointer;"};
    font-family: "Barlow Condensed", sans-serif;
    font-size: 3.73vw;
    font-weight: 400;
    height: 100%;
    letter-spacing: 0.53vw;
    ${({ $isSelected }) => !$isSelected && "transition: 0.3s ease;"};

    &:hover {
      ${({ $isSelected }) =>
        !$isSelected && `border-bottom-color: ${Colors.White05};`};
      ${({ $isSelected }) => !$isSelected && `color: ${Colors.White};`};
    }

    @media screen {
      @media (min-width: 768px) {
        border-bottom-width: 0.4vw;
        font-size: 2.083vw;
        letter-spacing: 0.26vw;
      }

      @media (min-width: 1280px) {
        border-bottom-width: 0.23vw;
        font-size: 1.25vw;
        letter-spacing: 0.15625vw;
      }

      @media (min-width: 1440px) {
        border-bottom-width: 0.208vw;
        font-size: 1.11vw;
        letter-spacing: 0.14vw;
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
    width: 40vw;

    @media screen {
      @media (min-width: 768px) {
        width: 39vw;
      }

      @media (min-width: 1280px) {
        width: 33.3vw;
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
    letter-spacing: 1.067vw;
    margin-bottom: 8.53vw;
    text-transform: uppercase;

    @media screen {
      @media (min-width: 768px) {
        font-size: 2.6vw;
        gap: 3.125vw;
        letter-spacing: 0.52vw;
        margin-bottom: 4.167vw;
      }

      @media (min-width: 1280px) {
        font-size: 2.1875vw;
        gap: 1.875vw;
        letter-spacing: 0.3125vw;
        margin-bottom: unset;
      }

      @media (min-width: 1440px) {
        font-size: 1.94vw;
        gap: 1.67vw;
        letter-spacing: 0.278vw;
      }
    }
  `,
  SelectedDestination: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-family: "Barlow", sans-serif;
      font-size: 4vw;
      font-weight: 400;
      line-height: 180%;

      @media screen {
        @media (min-width: 768px) {
          font-size: 2.083vw;
        }

        @media (min-width: 1280px) {
          font-size: 1.4vw;
        }

        @media (min-width: 1440px) {
          font-size: 1.25vw;
        }
      }
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-family: "Bellefair", serif;
      font-size: 14.93vw;
      font-weight: 400;
      text-transform: uppercase;

      @media screen {
        @media (min-width: 768px) {
          font-size: 10.4167vw;
        }

        @media (min-width: 1280px) {
          font-size: 7.8125vw;
        }

        @media (min-width: 1440px) {
          font-size: 6.94vw;
        }
      }
    `,
    Statistics: {
      Key: styled.p`
        color: ${Colors.LightBlue};
        font-family: "Barlow Condensed", sans-serif;
        font-size: 3.73vw;
        font-weight: 400;
        letter-spacing: 0.53vw;

        @media screen {
          @media (min-width: 768px) {
            font-size: 1.82vw;
            letter-spacing: 0.26vw;
          }
          @media (min-width: 1280px) {
            font-size: 1.09375vw;
            letter-spacing: 0.15625vw;
          }
          @media (min-width: 1440px) {
            font-size: 0.972vw;
            letter-spacing: 0.14vw;
          }
        }
      `,
      Value: styled.p`
        color: ${Colors.White};
        font-family: "Bellefair", serif;
        font-size: 7.467vw;
        font-weight: 400;

        @media screen {
          @media (min-width: 768px) {
            font-size: 3.64583vw;
          }
          @media (min-width: 1280px) {
            font-size: 2.1875vw;
          }
          @media (min-width: 1440px) {
            font-size: 1.94vw;
          }
        }
      `,
    },
  },
};
