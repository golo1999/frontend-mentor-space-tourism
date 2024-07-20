import { create } from "zustand";

type StoreState = {
  isNavigationMenuOpen: boolean;
  closeNavigationMenu: () => void;
  openNavigationMenu: () => void;
};

export const useSettingsStore = create<StoreState>((set) => ({
  isNavigationMenuOpen: false,
  closeNavigationMenu() {
    const { isNavigationMenuOpen } = useSettingsStore.getState();

    if (isNavigationMenuOpen) {
      set((state) => ({ ...state, isNavigationMenuOpen: false }));
    }
  },
  openNavigationMenu() {
    const { isNavigationMenuOpen } = useSettingsStore.getState();

    if (!isNavigationMenuOpen) {
      set((state) => ({ ...state, isNavigationMenuOpen: true }));
    }
  },
}));
