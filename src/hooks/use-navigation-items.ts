import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { NavigationItem } from "models";

export function useNavigationItems() {
  const { pathname } = useLocation();

  const navigationItems = useMemo<NavigationItem[]>(
    () => [
      { id: "00", name: "HOME", route: "/" },
      {
        id: "01",
        name: "DESTINATION",
        route: "/destination",
        title: "Pick your destination",
      },
      { id: "02", name: "CREW", route: "/crew", title: "Meet your crew" },
      {
        id: "03",
        name: "TECHNOLOGY",
        route: "/technology",
        title: "Space Launch 101",
      },
    ],
    []
  );

  const matchedNavigationItem = useMemo(
    () => navigationItems.find(({ route }) => route === pathname),
    [navigationItems, pathname]
  );

  return { matchedNavigationItem, navigationItems };
}
