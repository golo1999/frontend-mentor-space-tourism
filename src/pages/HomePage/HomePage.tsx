import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useNavigationItems, useScrollLock } from "hooks";
import { useSettingsStore } from "store";

import { Button, Container, Text } from "./HomePage.style";

export function HomePage() {
  const navigate = useNavigate();
  const { navigationItems } = useNavigationItems();
  const { closeNavigationMenu } = useSettingsStore();
  const { unlockScroll } = useScrollLock();

  const handleButtonClick = useCallback(() => {
    const secondRoute = navigationItems[1].route;
    navigate(secondRoute);
    unlockScroll();
    closeNavigationMenu();
  }, [navigationItems, closeNavigationMenu, navigate, unlockScroll]);

  return (
    <Container.Content>
      <Container.Texts>
        <Text.Top>So, you want to travel to</Text.Top>
        <Text.Middle>Space</Text.Middle>
        <Text.Bottom>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Text.Bottom>
      </Container.Texts>
      <Container.Button>
        <Button onClick={handleButtonClick}>Explore</Button>
      </Container.Button>
    </Container.Content>
  );
}
