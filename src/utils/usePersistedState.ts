import { useState, useEffect } from "react";

export default function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storageValue =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
