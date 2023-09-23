import { motion } from 'framer-motion'
import { styled, css, VariantProps } from './stitches.config'
import { SVGAttributes } from 'react'

/**
 * @/common/Header
 */
export const HeaderWrapper = styled(motion.header, {
  position: 'fixed',
  zIndex: 10,
  top: 0,
  backdropFilter: 'blur(8px)',
  width: '100%',
  padding: '0 var(--space-gap)',
})

export const HeaderGrid = styled('div', {
  display: 'grid',
  height: 'inherit',
})

export const HeaderFlex = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  overflow: 'hidden',
})

export const Inner = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flex: '1 1 0%',

  svg: {
    transition: 'all 0.5s ease 0s',
    willChange: 'stroke, fill',
  },

  '.avatar': {
    display: 'block',
    transform: 'translateY(2px)',
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
    outline: 'none',
  },
})

export const Nav = styled('nav', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignContent: 'center',
  alignItems: 'center',
})

export const SvgLink = styled('a', {
  width: '20px!important',
  height: '20px!important',
  display: 'flex',
  alignItems: 'center',
  margin: '10px',
})

export const TitleWrap = styled('div', {
  display: 'flex',
  marginLeft: 'var(--space-gap)',
  marginRight: 'var(--space-gap)',
  overflow: 'hidden',
  flex: '1 1 0',
  maxWidth: '60vw',

  a: {
    fontSize: 'var(--font-h1)',
    color: 'var(--primary)',
    fontWeight: 600,
    display: 'inline-block',
    width: '50vw',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none',
  },
})

/**
 * @/pages
 */
export const Main = styled('main', {
  font: '16px var(--font-sans)',
  display: 'flex',
  flexDirection: 'column',
})

export const MainFlex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 0',
})

export const IntroWrap = styled('div', {
  fontFamily: 'var(--font-major)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 279px)',

  h2: {
    lineHeight: 1.6,
  },
})

export const LatestPost = styled('div', {
  height: '60px',

  'p:first-child': {
    fontWeight: 600,
  },
})

export const SpaceGapSpan = styled('span', {
  marginRight: 'var(--space-gap-half)',
})

/**
 * @/pages/post/[slug]
 */
export const Article = styled('article', {
  p: {
    lineHeight: '1.6',
    'letter-spacing': '0.3px',
  },
  'h1,h2': {
    marginTop: '1.9em',
  },
  h2: {
    fontSize: '1.33em',
    lineHeight: '1.6818',
    letterSpacing: '0px',
  },
  blockquote: {
    backgroundColor: 'var(--bg-secondary)',
    color: 'var(--secondary)',
    padding: '0.875rem',
    margin: '2.6rem',
    // p: {
    //   fontSize: "0.875rem",
    // },
  },
})

export const ArticlePostTime = styled('time', {
  opacity: 0.8,
  fontSize: 'var(--font-s)',
})

export const ArticleTag = styled('span', {
  opacity: 0.8,
  margin: '0 var(--space-gap)',
  fontSize: 'var(--font-s)',
  '> a': {
    margin: '0 var(--space-gap-half3)',
  },
})

/**
 * @/common/Shortcut
 */
export const Overlay = styled(motion.div, {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  zIndex: '999',
  outline: 'none',
})

export const ShortcutBox = styled('div', {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)',
  width: '600px',
  borderRadius: 'var(--border-radius-1)',

  '@media (max-width: 700px)': {
    width: '95%',
  },
})

export const Flex = styled('div', {
  display: 'flex',

  variants: {
    alignItems: {
      baseline: {
        alignItems: 'baseline',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
      ['flex-end']: {
        alignItems: 'flex-end',
      },
      ['flex-start']: {
        alignItems: 'flex-start',
      },
      start: {
        alignItems: 'start',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    alignContent: {
      baseline: {
        alignContent: 'baseline',
      },
      center: {
        alignContent: 'center',
      },
      end: {
        alignContent: 'end',
      },
      start: {
        alignContent: 'start',
      },
      stretch: {
        alignContent: 'stretch',
      },
    },
    direction: {
      column: {
        flexDirection: 'column',
      },
      columnReverse: {
        flexDirection: 'column-reverse',
      },
      row: {
        flexDirection: 'row',
      },
      rowReverse: {
        flexDirection: 'row-reverse',
      },
    },
    gap: {
      1: {
        gap: 'var(--space-1)',
      },
      2: {
        gap: 'var(--space-2)',
      },
      3: {
        gap: 'var(--space-3)',
      },
      4: {
        gap: 'var(--space-4)',
      },
      5: {
        gap: 'var(--space-5)',
      },
      6: {
        gap: 'var(--space-6)',
      },
      7: {
        gap: 'var(--space-7)',
      },
      8: {
        gap: 'var(--space-8)',
      },
      9: {
        gap: 'var(--space-9)',
      },
      10: {
        gap: 'var(--space-10)',
      },
      11: {
        gap: 'var(--space-11)',
      },
      12: {
        gap: 'var(--space-12)',
      },
      13: {
        gap: 'var(--space-13)',
      },
      14: {
        gap: 'var(--space-14)',
      },
      15: {
        gap: 'var(--space-15)',
      },
    },
    justifyContent: {
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'end',
      },
      ['space-around']: {
        justifyContent: 'space-around',
      },
      ['space-between']: {
        justifyContent: 'space-between',
      },
      ['space-evenly']: {
        justifyContent: 'space-evenly',
      },
      start: {
        justifyContent: 'start',
      },
    },
    wrap: {
      wrap: {
        flexWrap: 'wrap',
      },
      nowrap: {
        flexWrap: 'nowrap',
      },
    },
  },
  defaultVariants: {
    gap: 1,
    wrap: 'nowrap',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})

export const FormBox = styled(motion.div, {
  width: '100%',
  position: 'relative',
})

export const FormWrapper = styled('div', {
  position: 'relative',
  margin: '0 auto',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-color)',
  borderTopLeftRadius: 'var(--border-radius-1)',
  borderTopRightRadius: 'var(--border-radius-1)',

  form: {
    margin: '0px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const SearchInput = styled('input', {
  background: 'transparent',
  border: 'none',
  fontSize: 'var(--font-s)',
  fontFamily: 'inherit',
  fontWeight: '400',
  height: '55px',
  padding: '0px 16px',
  width: '100%',
  outline: 'none',
  color: 'var(--primary)',

  '&::placeholder': {
    color: 'var(--secondary)',
    opacity: '0.54',
  },
  '&::-webkit-input-placeholder': {
    color: 'var(--secondary)',
    opacity: '0.54',
  },
  '&:-ms-input-placeholder': {
    color: 'var(--secondary)',
    opacity: '0.54',
  },

  WebkitAppearance: 'none',
  MozAppearance: 'none',
  outlineOffset: '-2px',

  '&::-webkit-search-cancel-button': {
    WebkitAppearance: 'none',
  },
  '&::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },
  '&::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },

  '&::-webkit-autofill': {
    background: 'transparent',
    color: 'var(--primary)',
  },

  '@media (max-width: 500px)': {
    fontSize: '16px',
  },
})

export const SearchResultLabel = styled('span', {
  display: 'inline-block',
  cursor: 'pointer',
  marginRight: '8px',
  verticalAlign: 'top',
  color: 'var(--secondary)',
  width: '120px',
  fontWeight: 400,
  fontSize: 'var(--font-s)',
  letterSpacing: '0.3px',
  lineHeight: 'var(--line-hs)',
})

export const HEIGHT = 48
export const MAX_HEIGHT = 420
export const SHORTCUT_HEIGHT = 48

export const ResultListWrapper = styled('div', {
  height: `${MAX_HEIGHT + SHORTCUT_HEIGHT}px`,
})

export const ResultList = styled('ul', {
  background: 'var(--bg-primary)',
  maxHeight: `${MAX_HEIGHT + SHORTCUT_HEIGHT}px`,
  overflowY: 'scroll',
  margin: '0',
  padding: '0',

  width: '100%',

  boxShadow: 'var(--body-shadow)',

  borderBottomLeftRadius: 'var(--border-radius-1)',
  borderBottomRightRadius: 'var(--border-radius-1)',
  borderLeft: '1px solid var(--border-color)',
  borderRight: '1px solid var(--border-color)',
  borderBottom: '1px solid var(--border-color)',

  '@media (max-width: 700px)': {
    maxHeight: '450px',
  },
})

export const Result = styled(motion.li, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0px',
  listStyle: 'none',
  fontSize: 'var(--font-s)',
  fontWeight: '500',
  lineHeight: '24px',
  color: 'var(--secondary)',
  padding: '10px 16px',
  height: `${HEIGHT}px`,

  a: {
    color: 'unset',
    display: 'block',
    width: '500px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textDecoration: 'none',
  },

  '> div': {
    opacity: 0,
  },

  variants: {
    selected: {
      true: {
        backgroundColor: 'var(--bg-secondary)',
        a: {
          color: 'var(--primary)',
        },
        '> div': {
          opacity: 1,
        },
      },
    },
  },
})

export const StyledSVG = styled('svg', {
  variants: {
    variant: {
      default: { stroke: 'currentColor', fill: 'none' },
      primary: {
        stroke: 'var(--primary)',
        fill: 'none',
      },
      secondary: {
        stroke: 'var(--secondary)',
        fill: 'none',
      },
      tertiary: {
        stroke: 'var(--tertiary)',
        fill: 'none',
      },
    },
    outline: {
      true: {
        fill: 'none !important',
      },
    },
    size: {
      1: {
        width: 'var(--space-1)',
        height: 'var(--space-1)',
      },
      2: {
        width: 'var(--space-2)',
        height: 'var(--space-2)',
      },
      3: {
        width: 'var(--space-3)',
        height: 'var(--space-3)',
      },
      4: {
        width: 'var(--space-4)',
        height: 'var(--space-4)',
      },
      5: {
        width: 'var(--space-5)',
        height: 'var(--space-5)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    outline: true,
    size: 5,
  },
})

export type IconSize = VariantProps<typeof StyledSVG>['size']
export type IconVariant = VariantProps<typeof StyledSVG>['variant']
export interface IconProps extends SVGAttributes<SVGElement> {
  size?: IconSize
  variant?: IconVariant
}
export const EnterIcon = (props: IconProps) => (
  <StyledSVG
    width="22"
    height="22"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    role="img"
    {...props}
  >
    <title>Enter Arrow</title>
    <desc>
      An icon representing an a twisted arrow like the one used on the enter key
      for most keyboard
    </desc>
    <path
      d="M9.08862 10.6855L4.08862 15.6855L9.08862 20.6855"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.0886 4.68555V11.6855C20.0886 12.7464 19.6672 13.7638 18.917 14.514C18.1669 15.2641 17.1495 15.6855 16.0886 15.6855H4.08862"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </StyledSVG>
)

export const Command = (props: SVGAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke="currentColor"
      d="M18.0713 3.22449C17.2756 3.22449 16.5126 3.54056 15.95 4.10317C15.3874 4.66578 15.0713 5.42884 15.0713 6.22449V18.2245C15.0713 19.0201 15.3874 19.7832 15.95 20.3458C16.5126 20.9084 17.2756 21.2245 18.0713 21.2245C18.8669 21.2245 19.63 20.9084 20.1926 20.3458C20.7552 19.7832 21.0713 19.0201 21.0713 18.2245C21.0713 17.4288 20.7552 16.6658 20.1926 16.1032C19.63 15.5406 18.8669 15.2245 18.0713 15.2245H6.07129C5.27564 15.2245 4.51258 15.5406 3.94997 16.1032C3.38736 16.6658 3.07129 17.4288 3.07129 18.2245C3.07129 19.0201 3.38736 19.7832 3.94997 20.3458C4.51258 20.9084 5.27564 21.2245 6.07129 21.2245C6.86694 21.2245 7.63 20.9084 8.19261 20.3458C8.75522 19.7832 9.07129 19.0201 9.07129 18.2245V6.22449C9.07129 5.42884 8.75522 4.66578 8.19261 4.10317C7.63 3.54056 6.86694 3.22449 6.07129 3.22449C5.27564 3.22449 4.51258 3.54056 3.94997 4.10317C3.38736 4.66578 3.07129 5.42884 3.07129 6.22449C3.07129 7.02014 3.38736 7.7832 3.94997 8.34581C4.51258 8.90842 5.27564 9.22449 6.07129 9.22449H18.0713C18.8669 9.22449 19.63 8.90842 20.1926 8.34581C20.7552 7.7832 21.0713 7.02014 21.0713 6.22449C21.0713 5.42884 20.7552 4.66578 20.1926 4.10317C19.63 3.54056 18.8669 3.22449 18.0713 3.22449Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const Separator = styled('div', {
  width: '100%',
  fontSize: 'var(--font-s)',
  color: 'var(--primary)',
  fontWeight: 500,
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0px',
  padding: '20px 12px 8px',
})

export const Item = styled('li', {
  height: `${HEIGHT}px`,
  marginBottom: '0px',
  transition: '0.25s',
  listStyle: 'none',
  fontSize: 'var(--font-s)',
  fontWeight: '400',
  color: 'var(--tertiary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 4px',
  userSelect: 'none',
  borderRadius: 'var(--border-radius-1)',

  'a, button': {
    color: 'unset',
    width: '100%',
    background: 'none',
    border: 'none',
    height: `${HEIGHT}px`,
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0px 8px',
  },

  '&:hover, &[data-selected="true"]': {
    backgroundColor: 'var(--bg-secondary)',

    '&[data-nohover]': {
      backgroundColor: 'inherit',
    },

    'a, button': {
      color: 'var(--primary)',
    },

    svg: {
      stroke: 'var(--primary)',
    },
  },
})

export const ItemText = styled('span', {
  margin: '0px 8px',
  textAlign: 'left',
  flex: '1 1 0%',
  fontWeight: 400,
  fontSize: 'var(--font-s)',
  color: 'currentcolor',
  letterSpacing: '0.3px',
  lineHeight: 'var(--line-hs)',
  textRendering: 'optimizelegibility',
})

export const ShortcutList = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  backgroundColor: 'var(--bg-primary)',
  height: SHORTCUT_HEIGHT,
  padding: '0px 20px',
  borderTop: '1px solid var(--border-color)',
})

const _KBD = styled('kbd', {})

export const KBD = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <_KBD
    {...props}
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '500',
      borderRadius: '6px',
      height: 24,
      width: 24,
      background: 'var(--bg-secondary)',
    }}
  />
)
