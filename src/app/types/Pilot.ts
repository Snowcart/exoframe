import { Background } from "./Background";
import { Feature } from "./Feature";
import { PilotStats } from "./PilotStats";

export interface Pilot {
  features: Feature[];
  stats: PilotStats;
  background: Background;
  description: string;
  name: string;
  money: number;
}
