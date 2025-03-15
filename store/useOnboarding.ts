import { create } from "zustand";

export type RequestType = "pending" | "accepted" | "rejected" | "canceled";

interface IOnboardingState {
  isRequestedJoin: boolean;
  requestType: RequestType;
  setIsRequestedJoin: (value: boolean) => void;
  setRequestType: (value: RequestType) => void;
}

export const useOnboarding = create<IOnboardingState>((set) => ({
  isRequestedJoin: false,
  requestType: "pending",
  setIsRequestedJoin: (value) => set({ isRequestedJoin: value }),
  setRequestType: (value) => set({ requestType: value }),
}));
