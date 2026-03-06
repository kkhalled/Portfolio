"use client";

import { createContext, useCallback, useContext, useState } from "react";

type SplashContextType = {
  splashDone: boolean;
  markDone: () => void;
};

const SplashContext = createContext<SplashContextType>({
  splashDone: false,
  markDone: () => {},
});

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);
  const markDone = useCallback(() => setSplashDone(true), []);

  return (
    <SplashContext.Provider value={{ splashDone, markDone }}>
      {children}
    </SplashContext.Provider>
  );
}

export function useSplash() {
  return useContext(SplashContext);
}
