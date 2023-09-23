/**
 * Inspired by MaximeHeckel link: https://blog.maximeheckel.com
 * the popup and page layout and css style use a lot of code
 * original structure and adjusted css style
 * newly adjusted style components by stitches
 */

/**
 * - slow development in progress
 * todo: full text search
 *
 * Inspired by Daw-Chih Liou link: https://dawchihliou.github.io/articles/i-built-a-snappy-full-text-search-with-webassembly-rust-nextjs-and-xor-filters#final-thoughts
 * full text search use a lot of code
 * wasm/xor
 * script/xor
 *
 * The parts that need to be modified and resolved
 * word segmentation search
 * merge to generate meta data
 *
 * 2023/9/23, I have found a new crate that may be suitable for modifying the full text search and have a plan, but it's too busy
 * After completing backend
 * https://github.com/tantaraio/voy
 * https://news.ycombinator.com/item?id=23473303
 *
 */

import React from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FocusTrap from 'focus-trap-react'
import { allPosts } from 'contentlayer/generated'
import { useDarkMode } from '../hook/useDarkMode'
import { useDebounce } from '../hook/useDebounce'

import { css } from '../stitches.config'
import { Git, Twitter, PostList, HomeIcon, TragetIcon } from '../geist'
import {
  Overlay,
  ShortcutBox,
  Flex,
  FormBox,
  FormWrapper,
  SearchInput,
  SearchResultLabel,
  ResultListWrapper,
  HEIGHT,
  MAX_HEIGHT,
  ResultList,
  Result,
  EnterIcon,
  Separator,
  Item,
  ItemText,
  ShortcutList,
  KBD,
  Command,
  StyledSVG,
} from '../Styles'

import { xorf } from './xor'

interface Props {
  onClose: () => void
}

type Status = 'initial' | 'loading' | 'done'

type Result = {
  url: string
  title: string
}

type SearchError = {
  status: number
  statusText: string
}

export default function Shortcut(props: Props) {
  const { onClose } = props

  const [status, setStatus] = React.useState<Status>('initial')
  const [results, setResults] = React.useState<Result[]>([])
  const [searchQuery, setSearchQuery] = React.useState('')
  const [error, setError] = React.useState<SearchError | null>(null)

  const ref = React.useRef<HTMLElement>()
  const [mounted, setMounted] = React.useState(false)
  const [theme, _] = useDarkMode()
  const inputRef = React.useRef<HTMLInputElement>(null)
  const shortcutRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  const clickOutside = (e: React.BaseSyntheticEvent) => {
    if (
      shortcutRef &&
      shortcutRef.current &&
      shortcutRef.current.contains(e.target)
    ) {
      return null
    }

    return onClose()
  }

  const debouncedSearchQuery = useDebounce(searchQuery, 400)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()
  }

  /**
   * Contentlayer currently does not provide tag search
   * provide local offline search
   * character # hash tag search, todo: multiple sets of words, priority order
   * character / path search
   * character $ awk:todo
   * Full text search, todo: XOR
   * @param query
   */
  const querySemanticSearch = async (query: string) => {
    setError(null)
    setStatus('loading')

    switch (query.substring(0, 1)) {
      case '#':
        const _tag = allPosts
          .filter((item) => item.tags?.includes(query.substring(1)))
          .map(({ url, title }) => ({ url, title }))
        setResults(_tag)
        break

      case '/':
        const _url = allPosts
          .filter((item) => item.url?.includes(query))
          .map(({ url, title }) => ({ url, title }))
        setResults(_url)
        break

      default:
        // setResults([
        //   {
        //     title: 'XOR is coming soon ✨ Roadmap ',
        //     url: 'https://github.com/fromwhite/notes',
        //   },
        // ])

        const tupleResult = await xorf(query)
        const _result = Array.from(tupleResult, ([title, url]) => ({
          title,
          url,
        }))
        setResults(_result as any)
        break
    }

    setStatus('done')
  }

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  React.useEffect(() => {
    if (!debouncedSearchQuery) return

    const debouncedQuery = debouncedSearchQuery.trim()

    if (debouncedQuery !== '') {
      querySemanticSearch(debouncedQuery)
    }

    if (debouncedQuery === '') {
      setResults([])
      setStatus('initial')
    }
  }, [debouncedSearchQuery])

  React.useEffect(() => {
    ref.current = document.body
    setMounted(true)
  }, [])

  return mounted
    ? createPortal(
        <FocusTrap>
          <Overlay
            initial={{
              backgroundColor:
                theme === 'dark' ? 'rgba(0,0,0,0)' : 'rgba(241, 243, 247, 0)',
            }}
            animate={{
              backgroundColor:
                theme === 'dark'
                  ? 'rgba(0,0,0,0.8)'
                  : 'rgba(241, 243, 247, 0.8)',
            }}
            exit={{
              backgroundColor:
                theme === 'dark' ? 'rgba(0,0,0,0)' : 'rgba(241, 243, 247, 0)',
            }}
            onClick={clickOutside}
            aria-label="shortcut"
            aria-modal="true"
            tabIndex={-1}
            role="dialog"
          >
            <ShortcutBox>
              <Flex
                css={{
                  position: 'relative',
                  flexDirection: 'column',
                  '@media (max-width: 700px)': {
                    flexDirection: 'column-reverse',
                  },
                }}
                direction="column"
                gap="4"
              >
                <FormBox
                  id="search-box"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{
                    scale: 0.8,
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.1 },
                  }}
                  transition={{
                    ease: 'easeOut',
                    duration: 0.2,
                  }}
                  ref={shortcutRef}
                >
                  <FormWrapper>
                    <form onSubmit={handleSubmit}>
                      <SearchInput
                        ref={inputRef}
                        autoComplete="off"
                        type="search"
                        placeholder="Type keywords to search"
                        id="search-input"
                        name="search"
                        onChange={(e) => {
                          setSearchQuery(e.target.value)
                        }}
                        value={searchQuery}
                      />
                      <SearchResultLabel>
                        {debouncedSearchQuery !== '' && status !== 'loading'
                          ? `${results.length} results`
                          : null}
                      </SearchResultLabel>
                    </form>
                  </FormWrapper>

                  {debouncedSearchQuery !== '' ? (
                    <SearchResults results={results} onClose={onClose} />
                  ) : (
                    <CommandCenterStatic />
                  )}
                </FormBox>
              </Flex>
            </ShortcutBox>
          </Overlay>
        </FocusTrap>,
        // @ts-ignore
        ref.current
      )
    : null
}

export type IndexOperator = (nudge?: number) => void

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max)
}

const wrap = (value: number, min: number, max: number) => {
  const range = max - min

  return ((((value - min) % range) + range) % range) + min
}

function useIndexItem<T>(
  items: T[],
  initial = 0
): [
  T,
  IndexOperator,
  IndexOperator,
  React.Dispatch<React.SetStateAction<number>>,
] {
  const [index, setIndex] = React.useState(initial)
  const itemsRef = React.useRef(items)

  React.useEffect(() => {
    itemsRef.current = items

    setIndex((index) => clamp(index, 0, Math.max(items.length - 1, 0)))
  }, [items])

  const previousItem = React.useCallback((nudge: number = 1) => {
    setIndex((index) =>
      wrap(index - nudge, 0, Math.max(itemsRef.current.length, 0))
    )
  }, [])

  const nextItem = React.useCallback((nudge: number = 1) => {
    setIndex((index) =>
      wrap(index + nudge, 0, Math.max(itemsRef.current.length, 0))
    )
  }, [])

  return [items[index], previousItem, nextItem, setIndex]
}

interface SearchResultsProps {
  results: Result[]
  onClose: () => void
}

const SearchResults = (props: SearchResultsProps) => {
  const router = useRouter()
  const { results, onClose } = props

  const [selectedResult, previousResult, nextResult, setSelectedResult] =
    useIndexItem(results)

  const handlePointer = (index: number) => setSelectedResult(index)

  const handleKey = React.useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          if (!selectedResult) return
          router.push(selectedResult?.url).then(() => window.scrollTo(0, 0))
          setTimeout(onClose, 600)
          break
        case 'ArrowUp':
          event.preventDefault()
          previousResult()
          break
        case 'ArrowDown':
          event.preventDefault()
          nextResult()
          break
        default:
      }
    },
    [selectedResult, router, onClose, previousResult, nextResult]
  )

  React.useEffect(() => {
    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  React.useEffect(() => {
    if (selectedResult) {
      document
        .getElementById(selectedResult.url)
        ?.scrollIntoView({ block: 'nearest' })
    }
  }, [selectedResult])

  return (
    <ResultListWrapper>
      <ResultList
        style={{
          height:
            results.length === 0
              ? HEIGHT
              : results.length * HEIGHT + 1 >= MAX_HEIGHT
              ? MAX_HEIGHT
              : results.length * HEIGHT + 1,
          transition: 'height 0.4s ease-out',
          willChange: 'height',
        }}
      >
        {results.map((result, index) => (
          <Result
            key={result.url}
            id={result.url}
            selected={selectedResult === result}
            onPointerEnter={() => handlePointer(index)}
          >
            <Link href={result.url} onClick={() => setTimeout(onClose, 600)}>
              {result.title}
            </Link>
            <Flex
              alignItems="center"
              justifyContent="center"
              css={{
                height: '35px',
                width: '35px',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: 'var(--border-radius-1)',

                path: {
                  stroke: 'var(--primary)',
                },
              }}
            >
              <EnterIcon size={4} />
            </Flex>
          </Result>
        ))}
      </ResultList>
    </ResultListWrapper>
  )
}

const commandCenterStaticWrapper = css({
  maxHeight: `${MAX_HEIGHT}px`,
  overflowY: 'auto',
  padding: '0 8px',
})

const items = [
  'spaces',
  'home-navigation',
  'post-navigation',
  'twitter-social-link',
  'github-link',
]

interface CommandCenterStaticProps {
  collapse?: boolean
  onItemClick?: (item: string) => void
}

const CommandCenterStatic = (props: CommandCenterStaticProps) => {
  const { collapse, onItemClick } = props
  const [hidden, setHidden] = React.useState(false)

  const [
    selectedResult,
    previousResult,
    nextResult,
    // setSelectedResult
  ] = useIndexItem(items)

  const handleKey = React.useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          ;(
            document.getElementById(selectedResult)?.children[0] as HTMLElement
          ).click()
          break
        case 'ArrowUp':
          event.preventDefault()
          previousResult()
          break
        case 'ArrowDown':
          event.preventDefault()
          nextResult()
          break
        default:
      }
    },
    [previousResult, nextResult, selectedResult]
  )

  React.useEffect(() => {
    if (selectedResult) {
      document
        .getElementById(selectedResult)
        ?.scrollIntoView({ block: 'nearest' })
    }
  }, [selectedResult])

  React.useEffect(() => {
    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
    }
  }, [handleKey])

  React.useEffect(() => {
    if (collapse) {
      setTimeout(() => {
        setHidden(true)
      }, 500)
    } else {
      setHidden(false)
    }
  }, [collapse])

  return (
    <motion.div
      initial={false}
      animate={{
        height: collapse ? 0 : 468,
      }}
      transition={{ ease: 'easeInOut' }}
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderBottomLeftRadius: 'var(--border-radius-1)',
        borderBottomRightRadius: 'var(--border-radius-1)',
        overflow: 'hidden',
        border: collapse ? 'none' : '1px solid var(--border-color)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div aria-hidden={hidden} className={commandCenterStaticWrapper()}>
        <Separator
          css={{
            color: 'var(--color-s)',
          }}
        >
          Experimental
        </Separator>
        <Item
          // key="experimental"
          data-selected={selectedResult === 'spaces'}
          id="spaces"
          key="spaces"
        >
          <Flex
            as="button"
            css={{ cursor: 'pointer' }}
            data-testid="aimode-button"
            onClick={() => {
              // onItemClick("Spaces");
            }}
          >
            <StyledSVG css={{ svg: { color: 'var(--tertiary)!important' } }}>
              <TragetIcon />
            </StyledSVG>
            <ItemText css={{ margin: '0 8px', textAlign: 'left', flex: 1 }}>
              Spaces - Under development and testing
            </ItemText>
          </Flex>
        </Item>
        <Separator>Navigation</Separator>
        <Item
          data-selected={selectedResult === 'home-navigation'}
          id="home-navigation"
          key="home-navigation"
        >
          <Link href="/" passHref>
            <StyledSVG css={{ svg: { color: 'var(--tertiary)!important' } }}>
              <HomeIcon />
            </StyledSVG>
            <span style={{ marginLeft: '16px' }}>Home</span>
          </Link>
        </Item>
        <Item
          data-selected={selectedResult === 'post-navigation'}
          id="post-navigation"
          key="post-navigation"
        >
          <Link href="/post" passHref>
            <StyledSVG css={{ svg: { color: 'var(--tertiary)!important' } }}>
              <PostList />
            </StyledSVG>
            <span style={{ marginLeft: '16px' }}>Posts</span>
          </Link>
        </Item>
        <Separator>Links</Separator>
        <Item
          data-selected={selectedResult === 'twitter-social-link'}
          id="twitter-social-link"
          key="twitter-social-link"
        >
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledSVG css={{ svg: { color: 'var(--tertiary)!important' } }}>
              <Twitter />
            </StyledSVG>
            <span style={{ marginLeft: '15px' }}>Twitter</span>
          </a>
        </Item>
        <Item
          data-selected={selectedResult === 'github-link'}
          id="github-link"
          key="github-link"
        >
          <a
            href="https://github.com/fromwhite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledSVG css={{ svg: { color: 'var(--tertiary)!important' } }}>
              <Git />
            </StyledSVG>
            <span style={{ marginLeft: '15px' }}>Github</span>
          </a>
        </Item>
      </div>
      <ShortcutList>
        <Flex alignItems="center">
          <ItemText css={{ opacity: 0.7 }}>CMD</ItemText>
          <Flex>
            <KBD>
              <Command width="16" height="16" />
            </KBD>
            <KBD>K</KBD>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <ItemText css={{ opacity: 0.7 }}>Separator</ItemText>
          <Flex>
            <KBD>#</KBD>
            <KBD>/</KBD>
            {/* todo:full text */}
            {/* <KBD>$</KBD> */}
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <ItemText as="span" css={{ opacity: 0.7 }}>
            Open
          </ItemText>
          <Flex>
            <KBD>
              <EnterIcon size="4" />
            </KBD>
          </Flex>
        </Flex>
      </ShortcutList>
    </motion.div>
  )
}
