import { createStitches, CSS as StitchesCSS } from "@stitches/react";
import { styles } from "./globalStyle";

export const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches();

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@stitches/react";

export const globalStyles = globalCss(styles);
