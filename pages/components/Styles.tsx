import { motion } from "framer-motion";
import { styled } from "./stitches.config";

/**
 * @/compontent/Header
 */
export const HeaderWrapper = styled(motion.header, {
  height: "120px",
  position: "fixed",
  zIndex: 10,
  top: 0,
  backdropFilter: "blur(8px)",
  width: "100%",
  padding: "0 var(--space-gap)",
});

export const HeaderGrid = styled("div", {
  display: "grid",
  height: "inherit",
});

export const HeaderFlex = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  overflow: "hidden",
});

export const Inner = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  justifyContent: "flex-start",
  alignItems: "center",
  flex: "1 1 0%",

  svg: {
    transition: "all 0.5s ease 0s",
    willChange: "stroke, fill",
  },

  ".avatar": {
    display: "block",
    transform: "translateY(2px)",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    outline: "none",
  },
});

export const Nav = styled("nav", {
  display: "flex",
  justifyContent: "flex-end",
  alignContent: "center",
  alignItems: "center",
});

export const SvgLink = styled("a", {
  width: "20px!important",
  height: "20px!important",
  display: "flex",
  alignItems: "center",
  margin: "10px",
});

export const TitleWrap = styled("div", {
  font: "400 var(--font-major)",
  display: "flex",
  marginLeft: "var(--space-gap)",
  marginRight: "var(--space-gap)",
  overflow: "hidden",
  flex: "1 1 0",
  maxWidth: "60vw",

  p: {
    fontSize: "24px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

/**
 * @/pages
 */
export const Main = styled("main", {
  font: "16px var(--font-sans)",
  display: "flex",
  flexDirection: "column",
});

export const MainFlex = styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "1 1 0",
});

export const IntroWrap = styled("div", {
  fontFamily: "var(--font-major)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "calc(100vh - 279px)",

  h2: {
    lineHeight: 1.6,
  },
});

export const LatestPost = styled("div", {
  height: "60px",

  "p:first-child": {
    fontWeight: 600,
  },
});

export const SpaceGapSpan = styled("span", {
  marginRight: "var(--space-gap-half)",
});
