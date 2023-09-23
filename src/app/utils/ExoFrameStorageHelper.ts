import { ExoFrame } from "../types/ExoFrame";

export const getExoFromStorage = (): ExoFrame => {
  const frame = localStorage.getItem("exoFrame");
  if (frame) {
    return JSON.parse(frame) as ExoFrame;
  } else {
    return {} as ExoFrame;
  }
};

export const setExoToStorage = (exo: ExoFrame) => {
  localStorage.setItem("exoFrame", JSON.stringify(exo));
};
