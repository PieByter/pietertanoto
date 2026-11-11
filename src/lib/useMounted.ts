"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * Returns false during SSR and the first client render, then true after
 * hydration. Useful for values that depend on the current date, which would
 * otherwise differ between the static build and the browser and cause a
 * hydration mismatch.
 */
export function useMounted() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
