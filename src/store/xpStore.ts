import { create } from 'zustand';

interface XPStore {
  xp: number;
  level: number;
  incXP: (amount: number) => void;
  resetXP: () => void;
  levelUp: () => void;
}

export const useXPStore = create<XPStore>((set) => ({
  xp: 30,
  level: 1,
  incXP: (amount) =>
    set((state) => {
      const totalXP = state.xp + amount;
      if (totalXP >= 100) {
        return {
          xp: totalXP - 100,
          level: state.level + 1,
        };
      }
      return { xp: totalXP };
    }),
  resetXP: () => set({ xp: 0 }),
  levelUp: () =>
    set((state) => ({
      level: state.level + 1,
      xp: 0,
    })),
}));
