

// stores/usePaymentStore.ts
import { create } from 'zustand';

interface PaymentStore {
  amount: number;
  deposit: (value: number) => void;
}

export const usePaymentStore = create<PaymentStore>((set) => ({
  amount: 1600,
  deposit: (value: number) =>
    set((state) => ({
      amount: state.amount + value,
    })),
  pay: (value: number) => 
    set((state) => ({
      amount: state.amount - value
    }))  
}));
