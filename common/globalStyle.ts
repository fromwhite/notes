/**
 * convert globals css to React style JSON
 * @stitches/react
 * todo: design system
 */
export const styles = {
  ":root": {
    "color-scheme": "light dark",
    /* font-size: 62.5%; */
    /* font: 112.5%/1.45 Inter; */
    "font-size": "16px",
    "--font-s": "0.875rem",
    "--space-gap-half3": "4px",
    "--space-gap-half": "12px",
    "--space-gap": "24px",
    "--font-sans-fallback":
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI","Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans","Helvetica Neue", sans-serif',
    "--font-mono":
      "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace",
    "--top": "64px",
    "--stroke-width-0": 1,
    "--stroke-width-1": 1,
    "--stroke-width-15": 1.5,
    "--cyan-light": "#79ffe1",
    "--highlight-purple": "#f81ce5",
    "--foreground": "#000",
    "--background": "#fff",
    "--selection": "var(--cyan-light)",
    "--text-color": "var(--foreground)",
    "--accents": "#eaeaea",
    "--backdrop": "rgba(249, 250, 251, 0.4)",

    "--code-pre-color": "#403f53",
    "--code-pre-font":
      'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    /* --code-pre-selection: #fbfbfb; */
    "--code-pre-selection": "#eaeaea",
    "--not-pre-code-color": "#fff",
    "--not-pre-code-bg": "#fbfbfb",
    "--code-token-color-1": "#989fb1",
    "--code-token-color-2": "#994cc3",
    "--code-toekn-color-3": "#0c969b",
    "--code-token-color-4": "rgba(239, 83, 80, 0.56)",
    "--code-token-color-5": "#0c969b",
    "--code-token-color-6": "#994cc3",
    "--code-token-color-7": "#bc5454",
    "--code-token-color-8": "#aa0982",
    "--code-token-color-9": "#4876d6",
    "--code-token-color-10": "#994cc3",
    "--code-token-color-11": "#4876d6",
    "--code-token-color-12": "#994cc3",
    "--code-token-color-13": "#4876d6",
    "--code-token-color-14": "#111",
    "--code-token-color-15": "#c96765",
  },

  ".dark-theme": {
    "--foreground": "#fff",
    "--background": "#000",
    "--selection": "var(--highlight-purple)",
    "--accents": "#333",
    "--gray": "#ededed",
    "--backdrop": "rgba(22, 24, 29, 0.4)",

    "--code-pre-color": "#d6deeb",
    "--code-pre-selection": "rgba(29, 59, 83, 0.99)",
    "--not-pre-code-bg": "#011627",
    "--code-token-color-1": "#637777",
    "--code-token-color-2": "#c792ea",
    "--code-toekn-color-3": "#b2ccd6",
    "--code-token-color-5": "#80cbc4",
    "--code-token-color-6": "#7fdbca",
    "--code-token-color-7": "#ff5874",
    "--code-token-color-8": "#f78c6c",
    "--code-token-color-9": "#82aaff",
    "--code-token-color-10": "#82aaff",
    "--code-token-color-11": "#addb67",
    "--code-token-color-12": "#c792ea",
    "--code-token-color-13": "#addb67",
    "--code-token-color-14": "#ffcb8b",
    "--code-token-color-15": "#d6deeb",
  },

  code: {
    "font-family": "var(--font-mono)",
  },

  "ul.reset": {
    padding: "unset",
    margin: "unset",
    "list-style-type": "none",
  },

  "span.space-gap": {
    "margin-right": "var(--space-gap-half)",
  },

  ".ellipsis": {
    display: "inline-block",
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "white-space": "nowrap",
    "word-wrap": "normal",
    "max-width": "100%",
    "min-width": 0,
  },

  ".no-scrollbar": {
    "scrollbar-width": "none",
    "-webkit-overflow-scrolling": "touch",
  },

  ".no-scrollbar::-webkit-scrollbar": {
    display: "none",
  },

  "*,:after,:before": {
    "box-sizing": "border-box",
  },

  ":where(html, body)": {
    height: "100%",
  },

  "#__next": {
    position: "relative",
    "z-index": 0,
  },

  "a,details summary": {
    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
  },

  "::selection": {
    "background-color": "var(--selection)",
    color: "var(--text-color)",
  },

  "::-moz-selection": {
    "background-color": "var(--selection)",
    color: "var(--text-color)",
  },

  body: {
    position: "relative",
    "font-size": "100%",
    "min-height": "100%",
    "max-width": "100vw",
    margin: 0,
  },

  "html,html body": {
    "font-family": "var(--font-sans, var(--font-sans-fallback))",
  },

  "body,html": {
    "touch-action": "manipulation",
    "font-feature-settings": '"rlig" 1, "calt" 0',
    "text-rendering": "optimizeLegibility",
    "background-color": "var(--background)",
    color: "var(--gray)",
    "scroll-padding-top": "var(--top)",
    "-webkit-text-size-adjust": "100%",
    "-moz-text-size-adjust": "100%",
    "text-size-adjust": "100%",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },

  svg: {
    "shape-rendering": "crispEdges",
  },

  "svg circle,svg line,svg path,svg polygon,svg rect": {
    "shape-rendering": "geometricprecision",
  },

  /* general */
  ".font-w-600": {
    "font-weight": 600,
  },

  footer: {
    width: "100%",
    /* font: 62.5%/1.45 var(--font-major); */
    font: "14px var(--font-sans)",
    padding: "var(--space-gap)",
    display: "flex",
    "justify-content": "flex-start",
  },

  ".hero": {
    "min-height": "calc(100vh - 99px)",
    padding: "120px var(--space-gap) 0",
  },

  ".loading": {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "font-family": "var(--font-major)",
    "font-size": "1.2rem",
  },

  ".wrapper-full": {
    width: "100%",
    border: 0,
  },

  /*
   * overriding code block styles in "prism-theme-night-owl"
   */
  pre: {
    "border-radius": "0.5rem",
  },

  'code[class*="language-"],pre[class*="language-"]': {
    color: "var(--code-pre-color)",
    "font-family": "var(--code-pre-font)",
    "text-align": "left",
    "white-space": "pre",
    "word-spacing": "normal",
    "word-break": "normal",
    "word-wrap": "normal",
    "line-height": "1.5",
    "-moz-tab-size": 4,
    "-o-tab-size": 4,
    "tab-size": 4,
    "-webkit-hyphens": "none",
    "-moz-hyphens": "none",
    "-ms-hyphens": "none",
    hyphens: "none",
  },

  'code[class*="language-"] ::-moz-selection,code[class*="language-"]::-moz-selection,pre[class*="language-"] ::-moz-selection,pre[class*="language-"]::-moz-selection':
    {
      "text-shadow": "none",
      background: "var(--code-pre-selection)",
    },

  'code[class*="language-"] ::selection,code[class*="language-"]::selection,pre[class*="language-"] ::selection,pre[class*="language-"]::selection':
    {
      "text-shadow": "none",
      background: "var(--code-pre-selection)",
    },

  "@media print": {
    'code[class*="language-"],pre[class*="language-"]': {
      "text-shadow": "none",
    },
  },

  'pre[class*="language-"]': {
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
  },

  ':not(pre) > code[class*="language-"],pre[class*="language-"]': {
    color: "var(--not-pre-code-color)",
    background: "var(--not-pre-code-bg)",
  },

  ':not(pre) > code[class*="language-"]': {
    padding: "0.1em",
    "border-radius": "0.3em",
    "white-space": "normal",
  },

  ".token.cdata,.token.comment,.token.prolog": {
    color: "var(--code-token-color-1)",
  },

  ".token.punctuation": {
    color: "var(--code-token-color-2)",
  },

  ".namespace": {
    color: "var(--code-toekn-color-3)",
  },

  ".token.deleted": {
    color: "var(--code-token-color-4)",
  },

  ".token.keyword,.token.operator,.token.property,.token.symbol": {
    color: "var(--code-token-color-5)",
  },

  ".token.tag": {
    color: "var(--code-token-color-6)",
  },

  ".token.boolean": {
    color: "var(--code-token-color-7)",
  },

  ".token.number": {
    color: "var(--code-token-color-8)",
  },

  ".token.builtin,.token.char,.token.constant": {
    color: "var(--code-token-color-9)",
  },

  ".token.function": {
    color: "var(--code-token-color-10)",
  },

  ".language-css .token.string,.style .token.string,.token.entity,.token.string,.token.url":
    {
      color: "var(--code-token-color-11)",
    },

  ".token.doctype,.token.selector": {
    color: "var(--code-token-color-12)",
  },

  ".token.attr-name,.token.inserted": {
    color: "var(--code-token-color-13)",
  },

  ".token.atrule,.token.attr-value,.token.class-name": {
    color: "var(--code-token-color-14)",
  },

  ".token.important,.token.regex,.token.variable": {
    color: "var(--code-token-color-15)",
  },

  ".token.bold,.token.important": {
    "font-weight": 700,
  },
};