import styled from "styled-components";

import { Colors } from "environment";

export const Button = styled.div`
  align-items: center;
  aspect-ratio: 1 / 1;
  background-color: ${Colors.White};
  border-radius: 50%;
  color: ${Colors.VeryDarkNavy};
  display: flex;
  font-family: "Bellefair", serif;
  font-size: 4.79744vw;
  justify-content: center;
  text-transform: uppercase;
  transition: 0.3s ease;
  user-select: none;
  width: 38.38vw;

  &:hover {
    box-shadow: 0 0 0 23.46vw ${Colors.White01};
    color: ${Colors.VeryDarkNavy05};
  }

  @media screen {
    @media (min-width: 768px) {
      font-size: 4.165vw;
      width: 35.417vw;

      &:hover {
        box-shadow: 0 0 0 11.46vw ${Colors.White01};
      }
    }

    @media (min-width: 1280px) {
      font-size: 2.5vw;
      width: 21.25vw;

      &:hover {
        box-shadow: 0 0 0 6.875vw ${Colors.White01};
      }
    }

    @media (min-width: 1440px) {
      font-size: 2.22vw;
      width: 18.89vw;

      &:hover {
        box-shadow: 0 0 0 6.11vw ${Colors.White01};
      }
    }
  }
`;

export const Container = {
  Button: styled.div`
    display: flex;
    padding: 20vw 0;

    @media screen {
      @media (min-width: 768px) {
        align-items: unset;
        display: unset;
        flex: unset;
        padding: unset;
      }
    }
  `,
  Content: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 17.6vw;
    padding: 6.4vw;

    @media screen {
      @media (min-width: 768px) {
        gap: 8.6vw;
        padding: 16.67vw 5.20833vw;
      }

      @media (min-width: 1280px) {
        align-items: center;
        flex-direction: unset;
        gap: unset;
        justify-content: space-between;
        margin-top: 3.125vw;
        padding: 29.453125vw 12.890625vw 10vw;
      }

      @media (min-width: 1440px) {
        margin-top: 2.77vw;
        padding: 26.18055vw 11.4583vw 8.88vw;
      }
    }
  `,
  Texts: styled.div`
    align-items: center;
    color: ${Colors.LightBlue};
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 6.4vw;
    max-width: 100%;
    text-align: center;

    @media screen {
      @media (min-width: 768px) {
        gap: 3.125vw;
        padding: 0 11.46vw;
      }

      @media (min-width: 1280px) {
        align-items: unset;
        gap: 1.875vw;
        padding: unset;
        text-align: unset;
        width: 42.1875vw;
      }

      @media (min-width: 1440px) {
        gap: 1.66vw;
        width: 37.5vw;
      }
    }
  `,
};

export const Text = {
  Bottom: styled.p`
    font-family: "Barlow", sans-serif;
    font-size: 3.99787vw;
    line-height: 180%;

    @media screen {
      @media (min-width: 768px) {
        font-size: 2.083vw;
      }

      @media (min-width: 1280px) {
        font-size: 1.40625vw;
      }

      @media (min-width: 1440px) {
        font-size: 1.25vw;
      }
    }
  `,
  Middle: styled.p`
    color: ${Colors.White};
    font-family: "Bellefair", serif;
    font-size: 21.32195vw;
    text-transform: uppercase;

    @media screen {
      @media (min-width: 768px) {
        font-size: 18.75vw;
      }

      @media (min-width: 1280px) {
        font-size: 11.25vw;
      }

      @media (min-width: 1440px) {
        font-size: 10vw;
      }
    }
  `,
  Top: styled.p`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 4.2644vw;
    letter-spacing: 1.06vw;
    text-transform: uppercase;

    @media screen {
      @media (min-width: 768px) {
        font-size: 3.65vw;
        letter-spacing: 0.52vw;
      }

      @media (min-width: 1280px) {
        font-size: 2.1875vw;
        letter-spacing: 0.3125vw;
      }

      @media (min-width: 1440px) {
        font-size: 1.945vw;
        letter-spacing: 0.276vw;
      }
    }
  `,
};
