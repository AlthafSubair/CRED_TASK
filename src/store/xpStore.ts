import { create } from "zustand";


interface XPStore {
    xp: number;
    inc: (value: number) => void;
}

export const useXPStore = create<XPStore>((set) =>({
    xp: 60,
    inc: (value: number) => 
        set((state) => ({
            xp: state.xp + value
        }))
}))