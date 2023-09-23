import React from "react";
import ExoInventoryContext from "../Contexts/ExoInventoryContext";
import styled from "styled-components";
import { ExoWeapon } from "../types/ExoItem";
import FrameContext from "../Contexts/FrameContext";

const WeaponsSection = () => {
  const context = React.useContext(ExoInventoryContext);
  const weapons = context.ExoWeapons;

  return (
    <WeaponContainers>
      <div> Weapons: </div>
      {weapons.map((weapon, i) => {
        return <WeaponInfo key={i} weapon={weapon} />;
      })}
    </WeaponContainers>
  );
};

export default WeaponsSection;

const WeaponContainers = styled.div`
  border: 1px solid turquoise;
  flex-direction: column;
  display: flex;
  width: 50%;
`;

interface WeaponInfoProps {
  weapon: ExoWeapon;
}

const WeaponInfo = ({ weapon }: WeaponInfoProps) => {
  const [hover, setHover] = React.useState(false);
  const [hoverDesc, setHoverDesc] = React.useState("");
  const { modifiedStats } = React.useContext(FrameContext);

  //test
  const pilot = {
    reflex: 3,
  };

  const calculateToHit = () => {
    const isRanged = weapon.type === "ranged";
    const lightMelee = () => {
      return (
        <ToHitWrapper>
          <div>Contested Frame RFLX Check: </div>
          <div>1d12 + {pilot.reflex + modifiedStats.response}</div>
        </ToHitWrapper>
      );
    };

    const melee = () => {
      return (
        <ToHitWrapper>
          <div>Contested STR Check: </div>
          <div>1d12 + {modifiedStats.strength}</div>
        </ToHitWrapper>
      );
    };

    const ranged = () => {
      return (
        <ToHitWrapper>
          <div>To Hit: </div>
          <div>
            1d12
            {!!modifiedStats.lockOn && (
              <span> + {modifiedStats.lockOn}</span>
            )}{" "}
            &gt; {weapon.weaponDifficulty}
          </div>
        </ToHitWrapper>
      );
    };
    if (isRanged) {
      return ranged();
    } else {
      if (weapon.tags.some((x) => x.name === "versatile")) {
        return (
          <>
            {lightMelee()}
            <div>OR</div>
            {melee()}
          </>
        );
      }
      if (weapon.tags.some((x) => x.name === "light")) {
        return lightMelee();
      }
      return melee();
    }
  };

  const setTheHover = (desc: string) => {
    setHoverDesc(desc);
    setHover(true);
  };

  const Hover = () => {
    return <HoverContainer>{hoverDesc}</HoverContainer>;
  };
  return (
    <WeaponContainer>
      <WeaponTitle
        onMouseEnter={() => setTheHover(weapon.description)}
        onMouseLeave={() => setHover(false)}
      >
        {weapon.label}
      </WeaponTitle>
      <TagsContainer>
        {weapon.tags.map((tag, i) => {
          return (
            <div
              onMouseEnter={() => setTheHover(tag.description)}
              onMouseLeave={() => setHover(false)}
              key={i}
            >
              {tag.label}
            </div>
          );
        })}
      </TagsContainer>
      <hr />
      {calculateToHit()}
      <hr />
      <div>Range: {weapon.range}</div>
      <div>
        Damage: {weapon.damage}
        {weapon.type === "melee" && !!modifiedStats.strength && (
          <span> + {modifiedStats.strength} </span>
        )}
      </div>
      {!!Number(weapon.structureDamage) && (
        <div>
          Structure Damage Multiplier: ({weapon.damage} +{" "}
          {modifiedStats.strength}){weapon.structureDamage}
        </div>
      )}
      <div>Value: {weapon.value}</div>
      {weapon.weaponDifficulty && (
        <div>Weapon Difficulty: {weapon.weaponDifficulty}</div>
      )}
      {hover && <Hover />}
    </WeaponContainer>
  );
};

const HoverContainer = styled.div`
  position: relative;
  z-index: 10;
  border: 1px solid orange;
`;

const WeaponContainer = styled.div`
  width: 50%;
`;

const WeaponTitle = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  cursor: pointer;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  div {
    padding-right: 9px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const ToHitWrapper = styled.div`
  padding: 5px;
`;
