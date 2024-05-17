"use client"

// Create a custom hook for media queries
import { useState, useEffect } from "react";

export async function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const listener = () => {
      setMatches(media.matches);
    };

    media.addListener(listener);
    listener(); // Check on mount (callback is not called until a change occurs)

    return () => media.removeListener(listener);
  }, [query]);

  return matches;
}
