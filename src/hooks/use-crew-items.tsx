import { useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Icons } from "environment";
import { CrewMember } from "models";

const CREW_MEMBER_A_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.CrewMemberA />)
);
const CREW_MEMBER_B_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.CrewMemberB />)
);
const CREW_MEMBER_C_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.CrewMemberC />)
);
const CREW_MEMBER_D_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.CrewMemberD />)
);

export function useCrewItems() {
  return useMemo<CrewMember[]>(
    () => [
      {
        description:
          "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        id: "Crew-Member-A",
        imageUri: `url("data:image/svg+xml,${CREW_MEMBER_A_STRING}")`,
        name: "Douglas Hurley",
        title: "Commander",
      },
      {
        description:
          "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        id: "Crew-Member-B",
        imageUri: `url("data:image/svg+xml,${CREW_MEMBER_B_STRING}")`,
        name: "Mark Shuttleworth",
        title: "Mission specialist",
      },
      {
        description:
          "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
        id: "Crew-Member-C",
        imageUri: `url("data:image/svg+xml,${CREW_MEMBER_C_STRING}")`,
        name: "Victor Glover",
        title: "Pilot",
      },
      {
        description:
          "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
        id: "Crew-Member-D",
        imageUri: `url("data:image/svg+xml,${CREW_MEMBER_D_STRING}")`,
        name: "Anousheh Ansari",
        title: "Flight Engineer",
      },
    ],
    []
  );
}
