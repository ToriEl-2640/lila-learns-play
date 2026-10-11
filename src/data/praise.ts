/** Curated Lila responses. Kind, never shaming. */
export const PRAISE = ["Good thinking!", "You did it!", "Wonderful noticing!", "Yay! Bunny is cheering!"];
export const TRY_AGAIN = ["Let's try another way.", "You can take your time.", "Good try! Want to look again?"];
export const pick = (arr: string[], seed: number) => arr[Math.abs(seed) % arr.length];
