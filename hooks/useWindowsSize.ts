"use client";

import { useEffect, useState } from "react";

interface iWindowSize {
  width: number | null;
  height: number | null;
}

export function useWindowSize(): iWindowSize {
  const [windowSize, setWindowSize] = useState<iWindowSize>({
    width: null,
    height: null,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}
