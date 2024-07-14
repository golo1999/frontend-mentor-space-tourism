import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Column: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      height: 100%;
    `,
    Inner: styled.div`
      align-items: center;
      display: flex;
      flex: 1;
      gap: 2rem;
    `,
    Outer: styled.div`
      bottom: 3rem;
      display: flex;
      flex-direction: column;
      gap: 24px;
      left: 165px;
      position: absolute;
      right: 0;
      top: 184px;
    `,
  },
  Pagination: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `,
  SelectedTechnology: {
    Inner: styled.div`
      display: flex;
      flex-direction: column;
      gap: 24px;
    `,
    Outer: styled.div`
      display: flex;
      gap: 4rem;
      height: 304px;
    `,
    Texts: styled.div`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-transform: uppercase;
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
  `,
};

interface SelectedTechnologyPhotoProps {
  $imageUri: string;
}

export const Photo = {
  SelectedTechnology: styled.div<SelectedTechnologyPhotoProps>`
    aspect-ratio: 1 / 1;
    background-image: ${({ $imageUri }) => $imageUri};
    background-size: cover;
    width: 100%;
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
  `,
  SelectedTechnology: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-size: 18px;
      font-family: "Barlow", sans-serif;
      font-weight: 400;
      line-height: 180%;
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-size: 56px;
      font-family: "Bellefair", serif;
      font-weight: 400;
    `,
    Terminology: styled.h2`
      color: ${Colors.White05};
      font-family: "Bellefair", serif;
      font-size: 2rem;
      font-weight: 400;
    `,
  },
};
