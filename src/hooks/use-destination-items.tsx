import { useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Icons } from "environment";
import { Destination } from "models";

const EUROPA_IMAGE_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.Europa />)
);
const MARS_IMAGE_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.Mars />)
);
const MOON_IMAGE_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.Moon />)
);
const TITAN_IMAGE_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.Titan />)
);

export function useDestinationItems() {
  return useMemo<Destination[]>(
    () => [
      {
        description:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        id: "Destination-A",
        imageUri: `url("data:image/svg+xml,${MOON_IMAGE_STRING}")`,
        name: "Moon",
        statistics: {
          0: { key: "Avg. distance", value: "384.400 km" },
          1: { key: "Est. travel time", value: "3 days" },
        },
      },
      {
        description:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        id: "Destination-B",
        imageUri: `url("data:image/svg+xml,${MARS_IMAGE_STRING}")`,
        name: "Mars",
        statistics: {
          0: { key: "Avg. distance", value: "225 mil. km" },
          1: { key: "Est. travel time", value: "9 months" },
        },
      },
      {
        description:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        id: "Destination-C",
        imageUri: `url("data:image/svg+xml,${EUROPA_IMAGE_STRING}")`,
        name: "Europa",
        statistics: {
          0: { key: "Avg. distance", value: "628 mil. km" },
          1: { key: "Est. travel time", value: "3 years" },
        },
      },
      {
        description:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        id: "Destination-D",
        imageUri: `url("data:image/svg+xml,${TITAN_IMAGE_STRING}")`,
        name: "Titan",
        statistics: {
          0: { key: "Avg. distance", value: "1.6 bil. km" },
          1: { key: "Est. travel time", value: "7 years" },
        },
      },
    ],
    []
  );
}
