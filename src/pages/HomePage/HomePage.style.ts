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
`;

export const Container = {
  Content: styled.div`
    align-items: center;
    bottom: 132px;
    display: flex;
    justify-content: space-between;
    left: 165px;
    position: absolute;
    right: 165px;
  `,
  Texts: styled.div`
    color: ${Colors.LightBlue};
    display: flex;
    flex-direction: column;
    font-weight: 400;
    gap: 24px;
    width: 540px;
  `,
};

export const Text = {
  Bottom: styled.p`
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    line-height: 180%;
  `,
  Middle: styled.p`
    color: ${Colors.White};
    font-family: "Bellefair", serif;
    font-size: 144px;
    text-transform: uppercase;
  `,
  Top: styled.p`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 28px;
    letter-spacing: 4px;
    text-transform: uppercase;
  `,
};
