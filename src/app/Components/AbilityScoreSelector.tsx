import React from "react";
import { PilotStats } from "../types/PilotStats";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";
import StatDropdown from "./Reusable/StatComponents/StatDropdown";
import StatInfo from "./Reusable/StatComponents/StatInfo";
import Button from "./Reusable/InputComponents/Button";
import next from "next";

const AbilityScoreSelector = (props: Props) => {
    const { nextPage, savedStats } = props;
  const [points, setPoints] = React.useState<PilotStats>(savedStats ?? { reflex: undefined, sway: undefined, insight: undefined, mechanics: undefined, grit: undefined } as PilotStats);
  const [used, setUsed] = React.useState<
    { label: string, value: number}[]
  >([]);
  const availablePoints = [
    {
      label: "+2",
      value: 2
    },
    {
      label: "+1",
      value: 1
    },
    {
      label: "0",
      value: 0,
    },
    {
      label: "-1",
      value: -1,
    },
    {
      label: "-1",
      value: -1,
    },
  ];

  const onSelect = (optionKey: string, value: number) => {
    const oldPoints = {...points};
    setPoints({ ...oldPoints, [optionKey]: Number(value) });
  }

  const select = () => {
    console.log(Object.values(points))
    if (Object.values(points).includes(undefined)) {
      alert("Please select a value for each stat.");
      return;
    } else {
        nextPage(points);
    }
  }

  return (
    <>
      <PilotStatGridContainer>
        <table>
          <tr>
            <th>Stat</th>
            <td>reflex</td>
            <td>sway</td>
            <td>insight</td>
            <td>mech</td>
            <td>grit</td>
          </tr>
          <tr>
            <th>Value</th>
            <td>{<StatDropdown optionKey="reflex" points={points} options={availablePoints} updateSelection={onSelect}/>}</td>
            <td>{<StatDropdown optionKey="sway" points={points} options={availablePoints} updateSelection={onSelect}/>}</td>
            <td>{<StatDropdown optionKey="insight" points={points} options={availablePoints} updateSelection={onSelect}/>}</td>
            <td>{<StatDropdown optionKey="mechanics" points={points} options={availablePoints} updateSelection={onSelect}/>}</td>
            <td>{<StatDropdown optionKey="grit" points={points} options={availablePoints} updateSelection={onSelect}/>}</td>
          </tr>
        </table>
      </PilotStatGridContainer>
      <StatContainer>
        <StatInfo title="reflex" description="The Pilot's reflex is how quickly they can react to things that happen. Some examples of when this stat is used is when Pilot tries to dodge something, prevent themselves from falling, srtike something, or react in their EXOFRAME. It is the only Pilot stat that directly effects Frame Combat."/>
        <StatInfo title="sway" description="The Pilot's sway stat is how well they can convince others to do what they want. Some examples of when this stat is used is when Pilot tries to convince someone to do something, lie to someone, sell something, or politically intimidate someone. Sway may be from a Piolt's status or charm."/>
        <StatInfo title="insight" description="The Pilot's insight is how good they are at seeing the intentions of others, corporations or the universe, as well as manipulating others to do their wills. Insight is used to get more informtion out of others, and implant information onto others. It can be seen as an indirect sway." />
        <StatInfo title="mechanics" description="The Pilot's mechanics is how good they are at repairing, building and operating machinery. This may be fixing their own ExoFrame, but also fixing other machinery, or building new things. Mechanics is also used to operate machinery, such as a vehicle, computer or spaceship." />
        <StatInfo title="grit" description="The Pilot's grit is how much they can endure, how much they can push themselves, and scare others. Grit is used to resist pain, resist fear, resist exhaustion, and resist the elements. Grit is also used to push oneself to do more than they normally could, such as running faster, lifting more, or staying awake longer." />
      </StatContainer>
      <ButtonContainer>
        <Button onClick={() => select()} label="Select" />
      </ButtonContainer>
    </>
  );
};

interface Props {
  nextPage: (scores: PilotStats) => void;
  savedStats?: PilotStats;
}

const PilotStatGridContainer = styled.div`
  width: 100%;
  padding: 10px;
  table {
    width: 100%;
    border-collapse: collapse;
  }
  table,
  th,
  td {
    border: 1px solid turquoise;
    text-align: center;
  }
`;

const GridLabel = styled.label`
  font-size: 15px;
`;

const StatContainer = styled.div`
padding: 10px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-top: 20px;
padding-bottom: 20px;
`;

export default AbilityScoreSelector;