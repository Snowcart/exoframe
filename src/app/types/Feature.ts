import { FrameStats } from "./ExoFrame";

export interface Feature {
  name: string;
  label: string;
  description: string;
  type: `passive` | `active`;
  active: boolean;
  modifiers: FrameStats;
  uses: number;
  usesRemaining: number;
}
