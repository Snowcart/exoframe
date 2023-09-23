"use client";

import styled from "styled-components";
import { FrameStats } from "../types/ExoFrame";
import { FrameClass } from "../types/Classes";
import { ExoFrame } from "../Objects/ExoFrame";
import React from "react";
import FrameContext from "../Contexts/FrameContext";

const stats: FrameStats = {
  strength: 0,
  lockOn: 0,
  response: 0,
  armor: 0,
  expansionBay: 10,
};

const StatGrid = () => {
  const { frame, modifiedStats } = React.useContext(FrameContext);
  const pilot = {
    reflex: 3,
  };

  return (
    <section>
      <Table>
        <tr>
          <th>STRG</th>
          <th>LOCK</th>
          <th>RESP</th>
          <th>ARMR</th>
          <th>RFLX</th>
        </tr>
        <tr>
          <th>+{modifiedStats.strength || 0}</th>
          <th>+{modifiedStats.lockOn || 0}</th>
          <th>+{modifiedStats.response || 0}</th>
          <th>+{modifiedStats.armor || 0}</th>
          <th>+{modifiedStats.response + pilot.reflex || 0}</th>
        </tr>
      </Table>
    </section>
  );
};

export default StatGrid;

const Table = styled.table`
  border-collapse: collapse;
  tr,
  th {
    border: 1px solid turquoise;
  }
  border: 1px solid turquoise;
  width: 200px;
`;
