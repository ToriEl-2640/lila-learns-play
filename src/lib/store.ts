import { useSyncExternalStore } from "react";
import type { AgeBand } from "@/data/ages";

/** Minimal, privacy-conscious local state. Nothing leaves the device. */
export type LilaState = {
  onboarded: boolean;
  age: AgeBand | null;
  sound: boolean;
  captions: boolean;
  interests: string[];
  completed: Record<string, { attempts: number; done: boolean; at: string }>;
};

const KEY = "lila-state-v1";
export const DEFAULT_STATE: LilaState = {
  onboarded: false,
  age: null,
  sound: true,
  captions: true,
  interests: [],
  completed: {},
};

let state: LilaState = DEFAULT_STATE;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    state = DEFAULT_STATE;
  }
}

export function getState() {
  load();
  return state;
}

export function setState(patch: Partial<LilaState> | ((s: LilaState) => Partial<LilaState>)) {
  load();
  const p = typeof patch === "function" ? patch(state) : patch;
  state = { ...state, ...p };
  try { window.localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* storage full or blocked */ }
  listeners.forEach((l) => l());
}

export function recordActivity(id: string, done: boolean) {
  setState((s) => {
    const prev = s.completed[id] ?? { attempts: 0, done: false, at: "" };
    return {
      completed: {
        ...s.completed,
        [id]: { attempts: prev.attempts + 1, done: prev.done || done, at: new Date().toISOString().slice(0, 10) },
      },
    };
  });
}

export function resetAll() {
  try { window.localStorage.removeItem(KEY); } catch { /* ignore */ }
  state = DEFAULT_STATE;
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useLila() {
  const s = useSyncExternalStore(subscribe, getState, () => DEFAULT_STATE);
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  return { ...s, hydrated };
}
