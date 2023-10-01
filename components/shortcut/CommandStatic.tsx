import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { css } from '../stitches.config'
import {
  Git,
  Twitter,
  PostIcon,
  HomeIcon,
  TragetIcon,
  InviteIcon,
} from '../geist'
import { Flex, MAX_HEIGHT, EnterIcon, StyledSVG } from '../Styles'
import { Separator, Item, ItemText, ShortcutList, KBD, Command } from './Styles'
import useIndexItem from '../hook/useIndexItem'
import { useSession } from 'next-auth/react'

const CommandStaticWrapper = css({
  maxHeight: `${MAX_HEIGHT}px`,
  overflowY: 'auto',
  padding: '0 8px',
})

interface CommandStaticProps {
  collapse?: boolean
  onItemClick?: (item: string) => void
}

export const CommandStatic = (props: CommandStaticProps) => {
  const { data: session, status } = useSession()

  const items =
    status === 'authenticated' && session.user.role === 'admin'
      ? [
          'spaces',
          'home-navigation',
          'post-navigation',
          'invite-link',
          'twitter-social-link',
          'github-link',
        ]
      : [
          'spaces',
          'home-navigation',
          'post-navigation',
          'twitter-social-link',
          'github-link',
        ]

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
      <div aria-hidden={hidden} className={CommandStaticWrapper()}>
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
              <PostIcon />
            </StyledSVG>
            <span style={{ marginLeft: '16px' }}>Posts</span>
          </Link>
        </Item>
        {status === 'authenticated' && session.user.role === 'admin' ? (
          <Item
            data-selected={selectedResult === 'invite-link'}
            id="invite-link"
            key="invite-link"
          >
            <Link href="/invite" passHref>
              <StyledSVG css={{ svg: { color: 'var(--tertiary)!important' } }}>
                <InviteIcon />
              </StyledSVG>
              <span style={{ marginLeft: '16px' }}>Invite</span>
            </Link>
          </Item>
        ) : null}
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
