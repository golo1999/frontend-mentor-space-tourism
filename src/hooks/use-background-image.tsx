import { useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Icons } from "environment";
import { NavigationItem } from "models";

const CREW_PAGE_BACKGROUND_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.CrewPageBackground />)
);
const DESTINATION_PAGE_BACKGROUND_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.DestinationPageBackground />)
);
const HOME_PAGE_BACKGROUND_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.HomePageBackground />)
);
const TECHNOLOGY_PAGE_BACKGROUND_STRING = encodeURIComponent(
  renderToStaticMarkup(<Icons.TechnologyPageBackground />)
);

export function useBackgroundImage(
  selectedNavigationItem: NavigationItem | undefined
) {
  return useMemo(() => {
    let backgroundString;

    switch (selectedNavigationItem?.id) {
      case "00":
      default:
        backgroundString = HOME_PAGE_BACKGROUND_STRING;
        break;
      case "01":
        backgroundString = DESTINATION_PAGE_BACKGROUND_STRING;
        break;
      case "02":
        backgroundString = CREW_PAGE_BACKGROUND_STRING;
        break;
      case "03":
        backgroundString = TECHNOLOGY_PAGE_BACKGROUND_STRING;
        break;
    }

    return `url("data:image/svg+xml,${backgroundString}")`;
  }, [selectedNavigationItem?.id]);
}
