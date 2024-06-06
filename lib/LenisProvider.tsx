"use client";

import { ReactNode } from "react";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
};
