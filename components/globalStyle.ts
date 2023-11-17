/**
 * convert globals css to React style JSON
 * @stitches/react
 */
export const styles = {
  ':root': {
    'color-scheme': 'dark',
    'font-size': '16px',
    '--font-ss': '0.75rem',
    '--font-s': '0.875rem',
    '--font-h1': '1.5rem',
    '--line-hs': '1.25rem',
    '--gap': '24px', // Default full screen 1.5
    '--gap-half3': '4px',
    '--gap-half': '12px',
    '--space-gap': 'var(--gap)', // Layout variable 14' laptop 2560x1440 1.5, 27' desktop 3840*2160 3.5+
    '--font-sans-fallback':
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI","Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans","Helvetica Neue", sans-serif',
    '--font-mono':
      'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono, Courier New, monospace',
    '--top': '64px',
    '--stroke-width-0': 1,
    '--stroke-width-1': 1,
    '--stroke-width-15': 1.5,
    '--cyan-light': '#79ffe1',
    '--highlight-purple': '#f81ce5',

    // colors typeface
    '--color-s': '#0cce6b',
    '--primary': '#000',
    '--secondary': 'hsla(0,0%,40%,1)',
    '--tertiary': '#666',
    '--bg-primary': '#fff',
    '--bg-secondary': '#eaeaea',
    '--selection': 'var(--cyan-light)',
    '--text-color': 'var(--primary)',
    '--accents': '#eaeaea',
    '--backdrop': 'rgba(249, 250, 251, 0.4)',
    '--border-radius-0': '4px',
    '--border-radius-1': '8px',
    '--border-radius-2': '16px',
    '--border-color': '#eaeaea',

    '--colors-brand': 'rgb(14, 82, 241)',

    '--body-shadow':
      '1px 2px 2px rgba(201, 203, 207, 0.2), 2px 4px 4px rgba(201, 203, 207, 0.2), 4px 8px 8px rgba(201, 203, 207, 0.2), 8px 16px 16px rgba(201, 203, 207, 0.2), 16px 32px 32px rgba(201, 203, 207, 0.2)',

    '--space-0': '0px',
    '--space-1': '4px',
    '--space-2': '8px',
    '--space-3': '12px',
    '--space-4': '16px',
    '--space-5': '24px',

    '--code-pre-color': '#403f53',
    '--code-pre-font':
      'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    '--code-pre-selection': '#eaeaea',
    '--not-pre-code-color': '#fff',
    '--not-pre-code-bg': '#fbfbfb',
    '--code-token-color-1': '#989fb1',
    '--code-token-color-2': '#994cc3',
    '--code-toekn-color-3': '#0c969b',
    '--code-token-color-4': 'rgba(239, 83, 80, 0.56)',
    '--code-token-color-5': '#0c969b',
    '--code-token-color-6': '#994cc3',
    '--code-token-color-7': '#bc5454',
    '--code-token-color-8': '#aa0982',
    '--code-token-color-9': '#4876d6',
    '--code-token-color-10': '#994cc3',
    '--code-token-color-11': '#4876d6',
    '--code-token-color-12': '#994cc3',
    '--code-token-color-13': '#4876d6',
    '--code-token-color-14': '#111',
    '--code-token-color-15': '#c96765',
  },

  '.dark-theme': {
    '--primary': '#fff',
    '--secondary': 'hsla(0,0%,63%)',
    '--tertiary': '#888',
    '--bg-primary': '#000',
    '--bg-secondary': '#333',
    '--selection': 'var(--highlight-purple)',
    '--accents': '#333',
    '--gray': '#ededed',
    '--backdrop': 'rgba(22, 24, 29, 0.4)',
    '--border-color': '#333',

    '--colors-brand': 'rgb(86, 134, 245)',

    '--body-shadow':
      '"1px 2px 2px rgba(2, 2, 3, 0.2),2px 4px 4px rgba(2, 2, 3, 0.2),4px 8px 8px rgba(2, 2, 3, 0.2),8px 16px 16px rgba(2, 2, 3, 0.2),16px 32px 32px rgba(2, 2, 3, 0.2)",',

    '--code-pre-color': '#d6deeb',
    '--code-pre-selection': 'rgba(29, 59, 83, 0.99)',
    '--not-pre-code-bg': '#011627',
    '--code-token-color-1': '#637777',
    '--code-token-color-2': '#c792ea',
    '--code-toekn-color-3': '#b2ccd6',
    '--code-token-color-5': '#80cbc4',
    '--code-token-color-6': '#7fdbca',
    '--code-token-color-7': '#ff5874',
    '--code-token-color-8': '#f78c6c',
    '--code-token-color-9': '#82aaff',
    '--code-token-color-10': '#82aaff',
    '--code-token-color-11': '#addb67',
    '--code-token-color-12': '#c792ea',
    '--code-token-color-13': '#addb67',
    '--code-token-color-14': '#ffcb8b',
    '--code-token-color-15': '#d6deeb',
  },

  code: {
    'font-family': 'var(--font-mono)',
  },

  'ul.reset': {
    padding: 'unset',
    margin: 'unset',
    'list-style-type': 'none',
    'letter-spacing': '0.3px',

    h4: {
      'margin-bottom': 0,
      'line-height': '1.6',
    },

    p: {
      margin: '0.5rem 0',
      display: 'flex',
      'align-items': 'flex-start',
    },
  },

  a: {
    color: 'var(--primary)',
  },

  'a:hover,a:hover:visited,a:focus,a:focus:visited,a:active,a:active:visited': {
    color: 'inherit',
  },

  'span.space-gap': {
    'margin-right': 'var(--gap-half)',
    display: 'inline-block',
    width: '60px',
  },

  '.ellipsis': {
    display: 'inline-block',
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'nowrap',
    'word-wrap': 'normal',
    'max-width': '100%',
    'min-width': 0,
  },

  '.no-scrollbar': {
    'scrollbar-width': 'none',
    '-webkit-overflow-scrolling': 'touch',
  },

  '.no-scrollbar::-webkit-scrollbar': {
    display: 'none',
  },

  '*,:after,:before': {
    'box-sizing': 'border-box',
  },

  ':where(html, body)': {
    height: '100%',
  },

  '#__next': {
    position: 'relative',
    'z-index': 0,
  },

  'a,details summary': {
    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
  },

  '::selection': {
    'background-color': 'var(--selection)',
    color: 'var(--text-color)',
  },

  '::-moz-selection': {
    'background-color': 'var(--selection)',
    color: 'var(--text-color)',
  },

  body: {
    position: 'relative',
    'font-size': '100%',
    'min-height': '100%',
    'max-width': '100vw',
    margin: 0,
  },

  'html,html body': {
    'font-family': 'var(--font-sans, var(--font-sans-fallback))',
  },

  'body,html': {
    'touch-action': 'manipulation',
    'font-feature-settings': '"rlig" 1, "calt" 0',
    'text-rendering': 'optimizeLegibility',
    'background-color': 'var(--bg-primary)',
    color: 'var(--gray)',
    'scroll-padding-top': 'var(--top)',
    '-webkit-text-size-adjust': '100%',
    '-moz-text-size-adjust': '100%',
    'text-size-adjust': '100%',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  svg: {
    'shape-rendering': 'crispEdges',
  },

  'svg circle,svg line,svg path,svg polygon,svg rect': {
    'shape-rendering': 'geometricprecision',
  },

  footer: {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--font-s)',
    padding: 'var(--gap) calc(var(--space-gap) + var(--gap) + 30px)',
    display: 'flex',
    'justify-content': 'flex-start',
  },

  '.main': {
    'min-height': 'calc(100vh - 99px)',
    padding: '120px calc(var(--space-gap) + var(--gap) + 30px) 0',

    '> h2': {
      // fontSize: '1.33em',
      marginTop: '0px',
      'letter-spacing': '0.3px',
      'line-height': '1.6',
    },
  },

  '.loading': {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    'font-family': 'var(--font-major)',
    'font-size': '1.2rem',
  },

  '.wrapper-full': {
    width: '100%',
    border: 0,
  },

  '.cf-turnstile': {
    marginTop: '1.2rem',

    iframe: {
      'border-color': 'var(--border-color)',
      color: 'var(--primary)',
      'background-color': 'var(--bg-primary)',
      'border-radius': 'var(--border-radius-1)',
    },
  },

  '@media only screen and (max-width: 768px)': {
    '.main': {
      padding: '120px var(--space-gap) 0',
    },
    footer: {
      padding: 'var(--gap) var(--space-gap)',
    },
  },

  /*
   * overriding code block styles in "prism-theme-night-owl"
   */
  pre: {
    'font-size': '0.875rem',
    'border-radius': '0.5rem',
    overflow: 'scroll',
  },

  'code[class*="language-"],pre[class*="language-"]': {
    color: 'var(--code-pre-color)',
    'font-family': 'var(--code-pre-font)',
    'text-align': 'left',
    'white-space': 'pre',
    'word-spacing': 'normal',
    'word-break': 'normal',
    'word-wrap': 'normal',
    'line-height': '1.5',
    '-moz-tab-size': 4,
    '-o-tab-size': 4,
    'tab-size': 4,
    '-webkit-hyphens': 'none',
    '-moz-hyphens': 'none',
    '-ms-hyphens': 'none',
    hyphens: 'none',
  },

  'code[class*="language-"] ::-moz-selection,code[class*="language-"]::-moz-selection,pre[class*="language-"] ::-moz-selection,pre[class*="language-"]::-moz-selection':
    {
      'text-shadow': 'none',
      background: 'var(--code-pre-selection)',
    },

  'code[class*="language-"] ::selection,code[class*="language-"]::selection,pre[class*="language-"] ::selection,pre[class*="language-"]::selection':
    {
      'text-shadow': 'none',
      background: 'var(--code-pre-selection)',
    },

  '@media print': {
    'code[class*="language-"],pre[class*="language-"]': {
      'text-shadow': 'none',
    },
  },

  'pre[class*="language-"]': {
    padding: '1em',
    margin: '0.5em 0',
    overflow: 'auto',
  },

  ':not(pre) > code[class*="language-"],pre[class*="language-"]': {
    color: 'var(--not-pre-code-color)',
    background: 'var(--not-pre-code-bg)',
  },

  ':not(pre) > code[class*="language-"]': {
    padding: '0.1em',
    'border-radius': '0.3em',
    'white-space': 'normal',
  },

  '.token.cdata,.token.comment,.token.prolog': {
    color: 'var(--code-token-color-1)',
  },

  '.token.punctuation': {
    color: 'var(--code-token-color-2)',
  },

  '.namespace': {
    color: 'var(--code-toekn-color-3)',
  },

  '.token.deleted': {
    color: 'var(--code-token-color-4)',
  },

  '.token.keyword,.token.operator,.token.property,.token.symbol': {
    color: 'var(--code-token-color-5)',
  },

  '.token.tag': {
    color: 'var(--code-token-color-6)',
  },

  '.token.boolean': {
    color: 'var(--code-token-color-7)',
  },

  '.token.number': {
    color: 'var(--code-token-color-8)',
  },

  '.token.builtin,.token.char,.token.constant': {
    color: 'var(--code-token-color-9)',
  },

  '.token.function': {
    color: 'var(--code-token-color-10)',
  },

  '.language-css .token.string,.style .token.string,.token.entity,.token.string,.token.url':
    {
      color: 'var(--code-token-color-11)',
    },

  '.token.doctype,.token.selector': {
    color: 'var(--code-token-color-12)',
  },

  '.token.attr-name,.token.inserted': {
    color: 'var(--code-token-color-13)',
  },

  '.token.atrule,.token.attr-value,.token.class-name': {
    color: 'var(--code-token-color-14)',
  },

  '.token.important,.token.regex,.token.variable': {
    color: 'var(--code-token-color-15)',
  },

  '.token.bold,.token.important': {
    'font-weight': 700,
  },
}
