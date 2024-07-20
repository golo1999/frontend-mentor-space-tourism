import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Navigation } from "components";
import { useBackgroundImage, useNavigationItems } from "hooks";
import { NavigationItem } from "models";
import { Router } from "router";

interface MainContainerProps {
  $backgroundImageUri: string;
}

const Container = {
  Main: styled.div<MainContainerProps>`
    background-image: ${({ $backgroundImageUri }) => $backgroundImageUri};
    background-size: cover;
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
  `,
};

export function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { matchedNavigationItem, navigationItems } = useNavigationItems();
  const [selectedNavigationItem, setSelectedNavigationItem] = useState(
    matchedNavigationItem
  );
  const backgroundImageUri = useBackgroundImage(selectedNavigationItem);

  useEffect(() => {
    if (selectedNavigationItem?.route !== pathname && matchedNavigationItem) {
      setSelectedNavigationItem(matchedNavigationItem);
    }
  }, [matchedNavigationItem, pathname, selectedNavigationItem?.route]);

  const handleItemClick = useCallback(
    ({ id, route }: NavigationItem) => {
      if (id !== selectedNavigationItem?.id) {
        navigate(route);
      }
    },
    [selectedNavigationItem?.id, navigate]
  );

  const handleLogoClick = useCallback(() => {
    const firstRoute = navigationItems[0].route;
    if (pathname !== firstRoute) {
      navigate(firstRoute);
    }
  }, [navigationItems, pathname, navigate]);

  return (
    <Container.Main $backgroundImageUri={backgroundImageUri}>
      <Navigation
        items={navigationItems}
        selectedItem={selectedNavigationItem}
        onItemClick={handleItemClick}
        onLogoClick={handleLogoClick}
      />
      <Router />
    </Container.Main>
  );
}
