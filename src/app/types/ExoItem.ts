import { FrameClass } from "./Classes";
import { Feature } from "./Feature";

export interface ExoItem {
  name: string;
  label: string;
  description: string;
  slot?: `head` | `legs` | `arms` | `core` | `expansion` | `booster`;
  type: `melee` | `ranged` | `system` | `weapon` | `expansion` | `booster`;
  value: number;
  features: Feature[];
  tags: Tag[];
  frameLock?: FrameClass;
}

export interface ExoWeapon extends ExoItem {
  damage: string;
  range: string;
  weaponDifficulty: number;
  structureDamage: string;
}

export interface Tag {
  name: string;
  label: string;
  description: string;
}
