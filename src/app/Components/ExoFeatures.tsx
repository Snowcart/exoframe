"use client";
import React from "react";
import FrameContext from "../Contexts/FrameContext";
import { Feature } from "../types/Feature";
import styled from "styled-components";

const ExoFeatures = () => {
  const { frame, useFeature } = React.useContext(FrameContext);

  const features = frame.features;

  return (
    <div>
      {features.map((feature, i) => {
        return <ExoFeature feature={feature} useFeature={useFeature} key={i} />;
      })}
    </div>
  );
};

export default ExoFeatures;

const ExoFeature = (props: Props) => {
  return (
    <FeatureContainer>
      <FeatureName>{props.feature.label}</FeatureName>
      <p>{props.feature.description}</p>
      {props.feature.type === "active" && (
        <>
          <span>Feature active: </span>
          <input
            type="checkbox"
            checked={props.feature.active}
            onChange={() => props.useFeature(props.feature.name)}
          />
          <br />
          <span>Uses Remaining: </span> {props.feature.usesRemaining}/
          {props.feature.uses}
        </>
      )}
    </FeatureContainer>
  );
};

interface Props {
  feature: Feature;
  useFeature: (feature: string) => void;
}

const FeatureContainer = styled.div`
  border: 1px solid turquoise;
  width: 400px;
  height: 200px;
  overflow: scroll;
`;

const FeatureName = styled.h3``;
