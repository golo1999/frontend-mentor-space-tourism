import styled from "styled-components";

import { Colors } from "environment";

export const Container = {
  Content: {
    Column: {
      End: styled.div`
        flex: 1;
        height: 100%;
      `,
      Start: styled.div`
        display: flex;
        flex: 1;
        height: 100%;
        position: relative;
      `,
    },
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
      right: 165px;
      top: 184px;
    `,
  },
  Pagination: {
    Inner: styled.div`
      align-items: center;
      display: flex;
      gap: 40px;
      height: 15px;
    `,
    Outer: styled.div`
      bottom: 0;
      left: 0;
      padding-bottom: 3rem;
      position: absolute;
      width: 100%;
    `,
  },
  SelectedCrewMember: {
    Texts: {
      Inner: styled.div`
        display: flex;
        flex-direction: column;
        gap: 16px;
        text-transform: uppercase;
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
  SelectedCrewMember: {
    Description: styled.p`
      color: ${Colors.LightBlue};
      font-family: "Barlow", sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 180%;
    `,
    Name: styled.h1`
      color: ${Colors.White};
      font-family: "Bellefair", serif;
      font-size: 56px;
      font-weight: 400;
    `,
    Title: styled.h3`
      color: ${Colors.White05};
      font-family: "Bellefair", serif;
      font-size: 32px;
      font-weight: 400;
    `,
  },
};
