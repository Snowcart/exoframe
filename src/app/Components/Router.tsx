"use client";
import React from "react";
import FrameContext from "../Contexts/FrameContext";
import PilotContext from "../Contexts/PilotContext";
import styled from "styled-components";
import ExoFramePartial from "./ExoFramePartial";
import StatGrid from "./StatGrid";
import WeaponsSection from "./WeaponsSection";
import NewPilotForm from "./NewPilotForm";

const Router = () => {
  const { frame, useFeature } = React.useContext(FrameContext);
  const { pilot, newPilot } = React.useContext(PilotContext);

  return (
    <>
      {newPilot && (
        <>
          <NewPilotForm />
        </>
      )}
      {!newPilot && frame.class && (
        <Container>
          <ExoFramePartial />
          <StatGrid />
          <WeaponsSection />
        </Container>
      )}
    </>
  );
};
export default Router;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
