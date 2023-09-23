"use client";
import { FrameClass } from "../types/Classes";
import { ExoFrame as ExoFrameType, FrameStats } from "../types/ExoFrame";
import { ExoItem, ExoWeapon } from "../types/ExoItem";
import { Feature } from "../types/Feature";
import { Pilot } from "../types/Pilot";

let featureJson = require("../Objects/ClassFeatures");

export class ExoFrame implements ExoFrameType {
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

  constructor(exoFrame?: any) {
    this.name = exoFrame?.name;
    this.label = exoFrame?.label;
    this.class = exoFrame?.class;
    this.description = exoFrame?.description;
    this.userDescription = exoFrame?.userDescription;
    this.pilot = exoFrame?.pilot;
    this.expansions = exoFrame?.expansions;
    this.weapons = exoFrame?.weapons;
    this.maxPP = exoFrame?.maxPP;
    this.currentPP = exoFrame?.currentPP;
    this.baseStats = exoFrame?.baseStats;
    this.features = this.getFeatures();
    this.statModifier = this.getStatMods();
  }

  getFeatures = () => {
    const allFeatures: Feature[] = [];
    if (this.weapons)
      allFeatures.push(
        ...this.weapons?.map((weapon) => weapon.features).flat()
      );
    if (this.expansions)
      allFeatures.push(
        ...this.expansions?.flatMap((expansion) => expansion.features)
      );
    if (this.pilot) allFeatures.push(...this.pilot?.features);
    if (this.class)
      allFeatures.push(
        ...featureJson[this.class].map((feature: Feature) => feature)
      );

    return allFeatures;
  };

  getStatMods = () => {
    let stats: FrameStats = {
      strength: 0,
      lockOn: 0,
      response: 0,
      armor: 0,
      expansionBay: 0,
    };
    // features can add stats
    this.features.forEach((feature) => {
      if (feature.active) {
        stats.strength += feature.modifiers?.strength;
        stats.lockOn += feature.modifiers?.lockOn;
        stats.response += feature.modifiers?.response;
        stats.armor += feature.modifiers?.armor;
        stats.expansionBay += feature.modifiers?.expansionBay;
      }
    });
    return stats;
  };
}
