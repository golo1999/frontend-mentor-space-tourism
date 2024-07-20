export type CrewMember = {
  description: string;
  id: string;
  imageUri: string;
  name: string;
  title: string;
};

export type Destination = {
  description: string;
  id: string;
  imageUri: string;
  name: string;
  statistics: Record<number, Statistics>;
};

export type NavigationItem = {
  id: string;
  name: string;
  route: string;
  title?: string;
};

type Statistics = { key: string; value: string };

export type Technology = {
  description: string;
  id: string;
  imageUri: string;
  name: string;
};
