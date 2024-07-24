import { createRef, MouseEvent, MutableRefObject } from "react";
import { useLocation } from "react-router-dom";

import { Line } from "components";
import { Colors } from "environment";
import { useNavigationItems, useOutsideClick, useScreenSize } from "hooks";
import { NavigationItem } from "models";
import { useSettingsStore } from "store";

import { Container, Icon, List, ListItem, Text } from "./Navigation.style";

interface Props {
  items: NavigationItem[];
  selectedItem: NavigationItem | undefined;
  onItemClick: (item: NavigationItem) => void;
  onLogoClick: () => void;
}

export function Navigation({
  items,
  selectedItem,
  onItemClick,
  onLogoClick,
}: Props) {
  const listRef = createRef<HTMLUListElement>();
  const { pathname } = useLocation();
  const { navigationItems } = useNavigationItems();
  const { screenWidth } = useScreenSize();
  const { isNavigationMenuOpen, closeNavigationMenu, openNavigationMenu } =
    useSettingsStore();

  useOutsideClick(
    listRef as MutableRefObject<HTMLUListElement>,
    closeNavigationMenu
  );

  const handleListContainerClick = (event: MouseEvent) =>
    event.stopPropagation();

  const isHomeRoute = pathname === navigationItems[0].route;
  const isStartContainerVisible =
    !isHomeRoute || screenWidth < 768 || screenWidth >= 1280;

  return (
    <Container.Main>
      {isStartContainerVisible && (
        <Container.Start>
          <Icon.Logo $isHomeRoute={isHomeRoute} onClick={onLogoClick} />
          {screenWidth >= 1280 && <Line />}
        </Container.Start>
      )}
      <Container.List
        $isMenuOpen={isNavigationMenuOpen}
        onClick={handleListContainerClick}
      >
        <List $isMenuOpen={isNavigationMenuOpen} ref={listRef}>
          {screenWidth < 768 && (
            <Container.Icon.Menu.Close>
              <Icon.Menu.Close
                color={Colors.LightBlue}
                onClick={closeNavigationMenu}
              />
            </Container.Icon.Menu.Close>
          )}
          <Container.ListItems>
            {items.map((item, index) => {
              const { id, name } = item;

              function handleItemClick() {
                onItemClick(item);
                closeNavigationMenu();
              }

              const isIdHidden =
                isHomeRoute &&
                screenWidth >= 768 &&
                screenWidth < 1280 &&
                index === 0;
              const isSelected = id === selectedItem?.id;

              return (
                <ListItem
                  $isSelected={isSelected}
                  key={id}
                  onClick={handleItemClick}
                >
                  {!isIdHidden && id}
                  <Text.ListItem.Name>{name}</Text.ListItem.Name>
                </ListItem>
              );
            })}
          </Container.ListItems>
        </List>
      </Container.List>
      {screenWidth < 768 && (
        <Container.Icon.Menu.Open>
          <Icon.Menu.Open
            $isMenuOpen={isNavigationMenuOpen}
            color={Colors.LightBlue}
            onClick={openNavigationMenu}
          />
        </Container.Icon.Menu.Open>
      )}
    </Container.Main>
  );
}
