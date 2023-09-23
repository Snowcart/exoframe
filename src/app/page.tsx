"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import { ExoFrame } from "./Objects/ExoFrame";
import { FrameClass } from "./types/Classes";
import StatGrid from "./Components/StatGrid";
import { FrameProvider } from "./Contexts/FrameContext";
import ExoFramePartial from "./Components/ExoFramePartial";
import { ExoInventoryProvider } from "./Contexts/ExoInventoryContext";
import WeaponsSection from "./Components/WeaponsSection";
import styled from "styled-components";
import { PilotProvider } from "./Contexts/PilotContext";
import Router from "./Components/Router";

export default function Home() {
  return (
    <PilotProvider>
      <FrameProvider>
        <ExoInventoryProvider>
          <main className={styles.main}>
            <div className={styles.description}>
              <Router />
            </div>
          </main>
        </ExoInventoryProvider>
      </FrameProvider>
    </PilotProvider>
  );
}
