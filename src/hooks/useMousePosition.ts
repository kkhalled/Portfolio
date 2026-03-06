"use client";

import { useEffect, useCallback } from "react";

export function useMousePosition() {
  const update = useCallback((e: MouseEvent) => {
    const r = document.documentElement;
    r.style.setProperty("--x", `${e.clientX}px`);
    r.style.setProperty("--y", `${e.clientY}px`);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", update, { passive: true });
    return () => window.removeEventListener("mousemove", update);
  }, [update]);
}
