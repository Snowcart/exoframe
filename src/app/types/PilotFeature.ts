import { FrameStats } from "./ExoFrame";
import { PilotStats } from "./PilotStats";

export interface PilotFeature {
  name: string;
  label: string;
  description: string;
  type: string;
  active: boolean;
  uses: number;
  usesRemaining: number;
  modifiers: PilotStats;
  visible: boolean;
  frameModifiers: FrameStats;
}
