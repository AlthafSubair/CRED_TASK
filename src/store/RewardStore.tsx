import { create } from "zustand"

interface RewardStore {
    points: number,
    update: (value: number) => void
}

export const useRewardStore = create<RewardStore>((set) => ({
    points: 200,
    update: (value: number) =>
        set((state) => ({
            points: state.points + value
        }))
}))