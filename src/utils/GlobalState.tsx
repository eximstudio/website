import { create } from "zustand";

export const state = create<State>((set) => ({
  menuOpen: false,
  setMenuOpen: (override: boolean) => set(() => ({ menuOpen: override })),
}));

export interface State {
  menuOpen: boolean;
  setMenuOpen: (override: boolean) => void;
}
