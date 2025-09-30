import { create } from 'zustand';

const sharedStore = create((set) => ({
  value: 'Initial zustand value',
  updateValue: (value) => set({ value }),
}));

export default sharedStore;
