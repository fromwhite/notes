import { createStitches, CSS as StitchesCSS } from "@stitches/react";

export const { config, css, getCssText, globalCss, keyframes, styled, theme } =
  createStitches();

export type CSS = StitchesCSS<typeof config>;
export type { VariantProps } from "@stitches/react";
