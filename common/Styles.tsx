import { motion } from "framer-motion";
import { styled, css } from "./stitches.config";

/**
 * @/common/Header
 */
export const HeaderWrapper = styled(motion.header, {
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
  display: "flex",
  marginLeft: "var(--space-gap)",
  marginRight: "var(--space-gap)",
  overflow: "hidden",
  flex: "1 1 0",
  maxWidth: "60vw",

  a: {
    fontSize: "24px",
    color: "var(--foreground)",
    fontWeight: 600,
    display: "inline-block",
    width: "50vw",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textDecoration: "none",
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

/**
 * @/pages/post/[slug]
 */
export const Article = styled("article", {
  p: {
    lineHeight: "normal",
  },
});
export const ArticlePostTime = styled("time", {
  opacity: 0.8,
  fontSize: "var(--font-s)",
});
export const ArticleTag = styled("span", {
  opacity: 0.8,
  margin: "0 var(--space-gap)",
  fontSize: "var(--font-s)",
  "> a": {
    margin: "0 var(--space-gap-half3)",
  },
});
