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

/**
 * Donot calculate padding when there are multiple logos
 * Increasing right padding when exceeding Avatar 30px
 */
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
  marginLeft: 'var(--gap)',
  marginRight: 'var(--gap)',
  overflow: 'hidden',
  flex: '1 1 0',
  maxWidth: '60vw',

  a: {
    fontSize: 'var(--font-h1)',
    color: 'var(--primary)',
    fontWeight: 500,
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
    fontWeight: 500,
  },
})

export const SpaceGapSpan = styled('span', {
  marginRight: 'var(--gap-half)',
})

/**
 * @/pages/post/[slug]
 */
export const Article = styled('article', {
  'font-size': '16px',
  lineHeight: '1.5',

  p: {
    lineHeight: '1.6',
    'letter-spacing': '0.3px',
  },
  'h1,h2,h3': {
    letterSpacing: '0.3px',
    lineHeight: '1.6',
  },
  h2: {
    fontSize: '1.33em',
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
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    margin: 'var(--gap-half) 0',
  },
  '.contains-task-list': {
    listStyle: 'none',
  },
  '.task-list-item [type=checkbox]': {
    margin: '0 0.2em 0.25em -1.4em',
    'vertical-align': 'middle',
  },
  hr: {
    margin: '2rem 0',
  },
  ul: {
    paddingLeft: '2em',
  },
})

export const ArticlePostTime = styled('time', {
  opacity: 0.8,
  fontSize: 'var(--font-s)',
})

export const ArticleTag = styled('span', {
  opacity: 0.8,
  margin: '0 var(--gap)',
  fontSize: 'var(--font-s)',
  '> a': {
    margin: '0 var(--gap-half3)',
  },
})

export const HEIGHT = 48
export const MAX_HEIGHT = 420
export const SHORTCUT_HEIGHT = 48

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

export const InviteWrapper = styled('div', {
  display: 'flex',
  height: 'calc(100vh - 99px)',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
})

export const InviteInput = styled('input', {
  appearance: 'none',
  outline: 'none',
  width: '300px',
  margin: '0px 20px',
  padding: 'var(--input-inner-padding, 8px 40px 8px 16px)',
  fontSize: 'var(--font-s)',
  fontFamily: 'inherit',
  lineHeight: '26px',
  color: 'var(--primary)',
  borderRadius: 'var(--border-radius-1)',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-primary)',
  boxShadow: '0px 0px 32px rgba(255, 255, 255, 0.2)',
  // transition: 'border-color 0.3s ease 0s, box-shadow 0.3s ease 0s',
})

export const InviteBtn = styled('button', {
  appearance: 'none',
  '-webkit-tap-highlight-color': 'transparent',
  'user-select': 'none',
  outline: 'none',
  cursor: 'pointer',
  fontSize: 'var(--font-s)',
  'font-style': 'inherit',
  height: '44px',
  padding: '11px 16px',
  borderRadius: 'var(--border-radius-1)',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-color)',
})

/**
 * SignIn box
 */
export const RegisterWarp = styled('div', {
  display: 'flex',
  'justify-content': 'center',
  'align-items': 'center',
  height: '100vh',
})

export const RegisterBox = styled('main', {
  'max-width': '450px',
  width: '100%',

  h2: {
    'font-weight': 700,
    'font-size': '1.25rem',
    'line-height': '1.75rem',
    'margin-bottom': '0.375rem',
  },

  label: {
    'font-size': '.875rem',
    'line-height': '1.25rem',
    'margin-top': '1rem',
    display: 'inline-block',
    color: 'var(--secondary)',
  },

  input: {
    width: '100%',
    height: '2.5rem',
    'margin-top': '0.5rem',
    padding: '0 8px',
    appearance: 'none',
    outline: 'none',
    fontSize: 'var(--font-s)',
    fontFamily: 'inherit',
    lineHeight: '26px',
    color: 'var(--primary)',
    borderRadius: 'var(--border-radius-1)',
    border: '1px solid var(--border-color)',
    background: 'var(--bg-primary)',
  },

  button: {
    appearance: 'none',
    '-webkit-tap-highlight-color': 'transparent',
    'user-select': 'none',
    outline: 'none',
    cursor: 'pointer',
    fontSize: 'var(--font-s)',
    'font-style': 'inherit',
    width: '100%',
    color: 'var(--primary)',
    margin: '1.2rem 0 0.5rem',
    padding: '11px 16px',
    borderRadius: 'var(--border-radius-1)',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color)',
  },
})
