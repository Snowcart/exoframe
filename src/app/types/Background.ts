import { PilotFeature } from "./PilotFeature";

export interface Background {
  name: string;
  label: string;
  description: string;
  quote: string;
  features: PilotFeature[];
}
