import { FrameClass } from "./Classes";
import { ExoItem, ExoWeapon } from "./ExoItem";
import { Feature } from "./Feature";
import { Pilot } from "./Pilot";

export interface ExoFrame {
  name: string;
  label: string;
  class: FrameClass;
  description: string;
  userDescription: string;
  pilot: Pilot;
  expansions: ExoItem[];
  weapons: ExoWeapon[];
  maxPP: number;
  currentPP: number;
  baseStats: FrameStats;
  statModifier: FrameStats;
  features: Feature[];
}

export interface FrameStats {
  strength: number;
  lockOn: number;
  response: number;
  armor: number;
  expansionBay: number;
}
