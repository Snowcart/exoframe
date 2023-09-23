"use client";

import styled from "styled-components";
import React, { FC } from "react";
import { ExoFrame } from "../Objects/ExoFrame";
import { FrameStats } from "../types/ExoFrame";
import { getExoFromStorage } from "../utils/ExoFrameStorageHelper";

const defaultFrameContext = {
  frame: new ExoFrame(),
  modifiedStats: {
    strength: 0,
    lockOn: 0,
    response: 0,
    armor: 0,
    expansionBay: 0,
  },
  useFeature: (feature: string) => {},
};

interface Props {
  children: React.ReactNode;
}

const FrameContext = React.createContext<{
  frame: ExoFrame;
  modifiedStats: FrameStats;
  useFeature: (feature: string) => void;
}>(defaultFrameContext);

const FrameProvider: FC<Props> = ({ children }) => {
  const [frame, setFrame] = React.useState(new ExoFrame({ class: "primal" }));
  const [modifiedStats, setModifiedStats] = React.useState<FrameStats>({
    strength: 0,
    lockOn: 0,
    response: 0,
    armor: 0,
    expansionBay: 0,
  });

  React.useEffect(() => {
    getFrameFromStorage();
    calculateModifiedStats();
  }, []);

  React.useEffect(() => {
    frame.getFeatures();
    calculateModifiedStats();
  }, [frame]);

  const getFrameFromStorage = () => {
    const x = getExoFromStorage();
    if (x?.name) {
      setFrame(new ExoFrame(x));
    }
  };

  const calculateModifiedStats = () => {
    const x = frame.getStatMods();
    setModifiedStats({
      strength: frame.baseStats?.strength ?? 0 + x.strength,
      lockOn: frame.baseStats?.lockOn ?? 0 + x.lockOn,
      response: frame.baseStats?.response ?? 0 + x.response,
      armor: frame.baseStats?.armor ?? 0 + x.armor,
      expansionBay: frame.baseStats?.expansionBay ?? 0 + x.expansionBay,
    });
  };

  const useFeature = (feature: string) => {
    // find the feature
    const theFeature = frame.features.find((x) => x.name === feature);
    if (theFeature) {
      if (theFeature?.active === true) {
        // turn off the feature anytime
        theFeature.active = false;
      } else {
        if (theFeature?.usesRemaining > 0) {
          // turn on the feature if it has uses
          theFeature.active = true;
          theFeature.usesRemaining -= 1;
        }
      }
      const arrayCopy = [...frame.features];
      const index = arrayCopy.findIndex((x) => x.name === feature);
      arrayCopy[index] = theFeature;
      setFrame({ ...frame, features: [...arrayCopy] });
    }
  };

  return (
    <FrameContext.Provider value={{ frame, modifiedStats, useFeature }}>
      {children}
    </FrameContext.Provider>
  );
};

export { FrameContext as default, FrameProvider };
