import { getState } from "./store";

/** Speaks text with the phone's built-in voice. Respects sound-off mode. */
export function speak(text: string) {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  if (!getState().sound) return false;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.9;
  u.pitch = 1.2;
  window.speechSynthesis.speak(u);
  return true;
}

export function stopSpeaking() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) window.speechSynthesis.cancel();
}
