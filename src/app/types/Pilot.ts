import { Feature } from "./Feature";

export interface Pilot {
  features: Feature[];
  stats: PilotStats;
  background: string;
  description: string;
  name: string;
  money: number;
}

export interface PilotStats {
  reflex: number;
  sway: number;
  insight: number;
  mechanics: number;
  grit: number;
}
