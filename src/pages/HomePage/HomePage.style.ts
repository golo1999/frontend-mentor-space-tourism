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
  font-size: 2rem;
  justify-content: center;
  text-transform: uppercase;
  transition: 0.3s ease;
  user-select: none;
  width: 17rem;

  &:hover {
    color: ${Colors.VeryDarkNavy05};
    box-shadow: 0 0 0 88px ${Colors.White01};
  }

  @media screen {
    @media (max-width: 1279px) {
      @media (max-width: 767px) {
        font-size: 18px;
        width: 9rem;
      }
    }
  }
`;

export const Container = {
  Button: styled.div`
    @media screen {
      @media (max-width: 767px) {
        display: flex;
        align-items: center;
        flex: 1;
      }
    }
  `,
  Content: styled.div`
    align-items: flex-end;
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin-top: 40px;
    padding: 128px 165px;

    @media screen {
      @media (max-width: 1279px) {
        align-items: center;
        flex-direction: column;
        gap: 66px;
        padding: 128px 40px;

        @media (max-width: 767px) {
          padding: 1.5rem;
        }
      }
    }
  `,
  Texts: styled.div`
    color: ${Colors.LightBlue};
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 24px;
    max-width: 100%;
    width: 540px;

    @media screen {
      @media (max-width: 1279px) {
        align-items: center;
        text-align: center;

        @media (min-width: 768px) {
          padding: 0 88px;
          width: unset;
        }
      }
    }
  `,
};

export const Text = {
  Bottom: styled.p`
    font-family: "Barlow", sans-serif;
    font-size: 18px;
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
  Middle: styled.p`
    color: ${Colors.White};
    font-family: "Bellefair", serif;
    font-size: 144px;
    text-transform: uppercase;

    @media screen {
      @media (max-width: 767px) {
        font-size: 80px;
      }
    }
  `,
  Top: styled.p`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;

    @media screen {
      @media (max-width: 767px) {
        font-size: 16px;
      }
    }
  `,
};
