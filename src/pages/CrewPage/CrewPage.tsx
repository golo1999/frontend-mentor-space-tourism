import { useEffect, useState } from "react";

import { useCrewItems, useNavigationItems } from "hooks";

import { Container, Item, Photo, Text } from "./CrewPage.style";

export function CrewPage() {
  const crewMembers = useCrewItems();
  const { matchedNavigationItem } = useNavigationItems();
  const [selectedCrewMember, setSelectedCrewMember] = useState(crewMembers[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const selectedCrewMemberIndex = crewMembers.findIndex(
        ({ id }) => id === selectedCrewMember.id
      );
      const isSelectedCrewMemberLast =
        selectedCrewMemberIndex === crewMembers.length - 1;
      const nextSelectedCrewMemberIndex = isSelectedCrewMemberLast
        ? 0
        : selectedCrewMemberIndex + 1;

      setSelectedCrewMember(crewMembers[nextSelectedCrewMemberIndex]);
    }, 20000);

    return () => clearInterval(interval);
  }, [crewMembers, selectedCrewMember.id]);

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
        <Container.Content.Column.Start>
          <Container.SelectedCrewMember.Texts.Outer>
            <Container.SelectedCrewMember.Texts.Inner>
              <Text.SelectedCrewMember.Title>
                {selectedCrewMember.title}
              </Text.SelectedCrewMember.Title>
              <Text.SelectedCrewMember.Name>
                {selectedCrewMember.name}
              </Text.SelectedCrewMember.Name>
            </Container.SelectedCrewMember.Texts.Inner>
            <Text.SelectedCrewMember.Description>
              {selectedCrewMember.description}
            </Text.SelectedCrewMember.Description>
          </Container.SelectedCrewMember.Texts.Outer>
          <Container.Pagination.Outer>
            <Container.Pagination.Inner>
              {crewMembers.map((member) => {
                const { id } = member;

                function handleClick() {
                  if (!isSelected) {
                    setSelectedCrewMember(member);
                  }
                }

                const isSelected = id === selectedCrewMember.id;

                return (
                  <Item.Pagination
                    $isSelected={isSelected}
                    key={id}
                    onClick={handleClick}
                  />
                );
              })}
            </Container.Pagination.Inner>
          </Container.Pagination.Outer>
        </Container.Content.Column.Start>
        <Container.Content.Column.End>
          <Photo.SelectedCrewMember $imageUri={selectedCrewMember.imageUri} />
        </Container.Content.Column.End>
      </Container.Content.Inner>
    </Container.Content.Outer>
  );
}
