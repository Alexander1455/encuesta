import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTokenStore = create(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token: `Bearer ${token}` }),
    }),
    {
      name: "token",
    }
  )
);
