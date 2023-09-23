import React from "react";
import { ExoItem, ExoWeapon } from "../types/ExoItem";
import { Pilot } from "../types/Pilot";

const defaultPilotContext = {
  pilot: {} as Pilot,
  newPilot: true,
};

interface Props {
  children: React.ReactNode;
}

const PilotContext = React.createContext<{
  pilot: Pilot;
  newPilot: boolean;
}>(defaultPilotContext);

const PilotProvider: React.FC<Props> = ({ children }) => {
  const [pilot, setPilot] = React.useState<Pilot>({} as Pilot);
  const [newPilot, setNewPilot] = React.useState<boolean>(true);

  React.useEffect(() => {
    getPilotFromStorage();
    if (pilot.name) {
      setNewPilot(false);
    }
  }, []);

  const getPilotFromStorage = () => {
    const x = localStorage.getItem("pilot");
    if (x) {
      setPilot(JSON.parse(x));
    } // implement later;
  };
  return (
    <PilotContext.Provider
      value={{
        pilot,
        newPilot,
      }}
    >
      {children}
    </PilotContext.Provider>
  );
};

export { PilotContext as default, PilotProvider };
