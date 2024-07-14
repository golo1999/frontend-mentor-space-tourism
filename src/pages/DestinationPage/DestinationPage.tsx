import { useState } from "react";

import { Line } from "components";
import { useDestinationItems, useNavigationItems } from "hooks";

import {
  Container,
  List,
  ListItem,
  Photo,
  Text,
} from "./DestinationPage.style";

export function DestinationPage() {
  const destinations = useDestinationItems();
  const { matchedNavigationItem } = useNavigationItems();
  const [selectedDestination, setSelectedDestination] = useState(
    destinations[0]
  );

  const { id: matchedNavigationItemId, title: matchedNavigationItemTitle } = {
    ...matchedNavigationItem,
  };

  return (
    <Container.Content.Outer>
      {matchedNavigationItem && (
        <Text.PageTitleWrapper>
          {matchedNavigationItemId}
          <Text.PageTitle>{matchedNavigationItemTitle}</Text.PageTitle>
        </Text.PageTitleWrapper>
      )}
      <Container.Content.Inner>
        <Container.Destination.Details.Column>
          <Photo.SelectedDestination $imageUri={selectedDestination.imageUri} />
        </Container.Destination.Details.Column>
        <Container.Destination.Details.Column>
          <Container.SelectedDestination.Details>
            <List.Destinations>
              {destinations.map((destination) => {
                const { id, name } = destination;

                const isSelected = destination.id === selectedDestination.id;

                function handleClick() {
                  if (!isSelected) {
                    setSelectedDestination(destination);
                  }
                }

                return (
                  <ListItem.Destinations
                    $isSelected={isSelected}
                    key={id}
                    onClick={handleClick}
                  >
                    {name}
                  </ListItem.Destinations>
                );
              })}
            </List.Destinations>
            <Container.SelectedDestination.Texts>
              <Text.SelectedDestination.Name>
                {selectedDestination.name}
              </Text.SelectedDestination.Name>
              <Text.SelectedDestination.Description>
                {selectedDestination.description}
              </Text.SelectedDestination.Description>
            </Container.SelectedDestination.Texts>
            <Line />
            <Container.SelectedDestination.Statistics.Outer>
              <Container.SelectedDestination.Statistics.Column>
                <Text.SelectedDestination.Statistics.Key>
                  {selectedDestination.statistics[0].key}
                </Text.SelectedDestination.Statistics.Key>
                <Text.SelectedDestination.Statistics.Value>
                  {selectedDestination.statistics[0].value}
                </Text.SelectedDestination.Statistics.Value>
              </Container.SelectedDestination.Statistics.Column>
              <Container.SelectedDestination.Statistics.Column>
                <Text.SelectedDestination.Statistics.Key>
                  {selectedDestination.statistics[1].key}
                </Text.SelectedDestination.Statistics.Key>
                <Text.SelectedDestination.Statistics.Value>
                  {selectedDestination.statistics[1].value}
                </Text.SelectedDestination.Statistics.Value>
              </Container.SelectedDestination.Statistics.Column>
            </Container.SelectedDestination.Statistics.Outer>
          </Container.SelectedDestination.Details>
        </Container.Destination.Details.Column>
      </Container.Content.Inner>
    </Container.Content.Outer>
  );
}
