import { useLocation } from "react-router-dom";

import { Line } from "components";
import { useNavigationItems } from "hooks";
import { NavigationItem } from "models";

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
  const { pathname } = useLocation();
  const { navigationItems } = useNavigationItems();

  const isHomeRoute = pathname === navigationItems[0].route;

  return (
    <Container.Main>
      <Container.Start>
        <Icon.Logo $isHomeRoute={isHomeRoute} onClick={onLogoClick} />
        <Line />
      </Container.Start>
      <List>
        {items.map((item) => {
          const { id, name } = item;

          const isSelected = id === selectedItem?.id;

          return (
            <ListItem
              $isSelected={isSelected}
              key={id}
              onClick={() => onItemClick(item)}
            >
              {id}
              <Text.ListItem.Name>{name}</Text.ListItem.Name>
            </ListItem>
          );
        })}
      </List>
    </Container.Main>
  );
}
