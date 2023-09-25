import { PilotFeature } from "./PilotFeature";

export interface Background {
  name: string;
  label: string;
  description: string;
  quote: string;
  attribution: string;
  src: string;
  features: PilotFeature[];
}
