import { useEffect, useState } from "react";

import { useNavigationItems, useTechnologyItems } from "hooks";

import { Container, Item, Photo, Text } from "./TechnologyPage.style";

export function TechnologyPage() {
  const { matchedNavigationItem } = useNavigationItems();
  const technologies = useTechnologyItems();
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedTechnologyIndex = technologies.findIndex(
        ({ id }) => id === selectedTechnology.id
      );
      const isSelectedTechnologyLast =
        selectedTechnologyIndex === technologies.length - 1;
      const nextSelectedTechnologyIndex = isSelectedTechnologyLast
        ? 0
        : selectedTechnologyIndex + 1;

      setSelectedTechnology(technologies[nextSelectedTechnologyIndex]);
    }, 20000);

    return () => clearInterval(interval);
  });

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
        <Container.Content.Column>
          <Container.SelectedTechnology.Outer>
            <Container.Pagination>
              {technologies.map((technology) => {
                const { id } = technology;

                function handleClick() {
                  if (!isSelected) {
                    setSelectedTechnology(technology);
                  }
                }

                const isSelected = id === selectedTechnology.id;

                return (
                  <Item.Pagination
                    $isSelected={isSelected}
                    key={id}
                    onClick={handleClick}
                  >
                    {id}
                  </Item.Pagination>
                );
              })}
            </Container.Pagination>
            <Container.SelectedTechnology.Inner>
              <Container.SelectedTechnology.Texts>
                <Text.SelectedTechnology.Terminology>
                  The terminology...
                </Text.SelectedTechnology.Terminology>
                <Text.SelectedTechnology.Name>
                  {selectedTechnology.name}
                </Text.SelectedTechnology.Name>
              </Container.SelectedTechnology.Texts>
              <Text.SelectedTechnology.Description>
                {selectedTechnology.description}
              </Text.SelectedTechnology.Description>
            </Container.SelectedTechnology.Inner>
          </Container.SelectedTechnology.Outer>
        </Container.Content.Column>
        <Container.Content.Column>
          <Photo.SelectedTechnology $imageUri={selectedTechnology.imageUri} />
        </Container.Content.Column>
      </Container.Content.Inner>
    </Container.Content.Outer>
  );
}
