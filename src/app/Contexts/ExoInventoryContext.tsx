import React from "react";
import { ExoItem, ExoWeapon } from "../types/ExoItem";

const weaponCatalog = require("../../../weaponCatalog.json");

const defaultExoInventoryContext = {
  ExoItems: [],
  ExoWeapons: [],
};

interface Props {
  children: React.ReactNode;
}

const ExoInventoryContext = React.createContext<{
  ExoItems: ExoItem[];
  ExoWeapons: ExoWeapon[];
}>(defaultExoInventoryContext);

const ExoInventoryProvider: React.FC<Props> = ({ children }) => {
  const [ExoItems, setExoItems] = React.useState<ExoItem[]>([]);
  const [ExoWeapons, setExoWeapons] =
    React.useState<ExoWeapon[]>(weaponCatalog);
  console.log(ExoWeapons);

  return (
    <ExoInventoryContext.Provider
      value={{
        ExoItems,
        ExoWeapons,
      }}
    >
      {children}
    </ExoInventoryContext.Provider>
  );
};

export { ExoInventoryContext as default, ExoInventoryProvider };
