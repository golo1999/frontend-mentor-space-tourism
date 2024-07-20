import { useMemo } from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { Icons, Images } from "environment";
import { useScreenSize } from "hooks";
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
  const { screenWidth } = useScreenSize();

  return useMemo(() => {
    let backgroundString;

    switch (selectedNavigationItem?.id) {
      case "00":
      default:
        if (screenWidth >= 1280) {
          backgroundString = `data:image/svg+xml,${HOME_PAGE_BACKGROUND_STRING}`;
        } else if (screenWidth >= 768) {
          backgroundString = Images.BackgroundHomeTablet;
        } else {
          backgroundString = Images.BackgroundHomeMobile;
        }

        break;
      case "01":
        if (screenWidth >= 1280) {
          backgroundString = `data:image/svg+xml,${DESTINATION_PAGE_BACKGROUND_STRING}`;
        } else if (screenWidth >= 768) {
          backgroundString = Images.BackgroundDestinationsTablet;
        } else {
          backgroundString = Images.BackgroundDestinationsMobile;
        }

        break;
      case "02":
        if (screenWidth >= 1280) {
          backgroundString = `data:image/svg+xml,${CREW_PAGE_BACKGROUND_STRING}`;
        } else if (screenWidth >= 768) {
          backgroundString = Images.BackgroundCrewTablet;
        } else {
          backgroundString = Images.BackgroundCrewMobile;
        }

        break;
      case "03":
        if (screenWidth >= 1280) {
          backgroundString = `data:image/svg+xml,${TECHNOLOGY_PAGE_BACKGROUND_STRING}`;
        } else if (screenWidth >= 768) {
          backgroundString = Images.BackgroundTechnologyTablet;
        } else {
          backgroundString = Images.BackgroundTechnologyMobile;
        }

        break;
    }

    return `url("${backgroundString}")`;
  }, [screenWidth, selectedNavigationItem?.id]);
}
