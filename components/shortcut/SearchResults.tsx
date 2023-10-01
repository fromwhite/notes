import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useIndexItem from '../hook/useIndexItem'
import {
  Flex,
  ResultListWrapper,
  HEIGHT,
  MAX_HEIGHT,
  ResultList,
  Result,
  EnterIcon,
} from '../Styles'
import type { Result as SearchResult } from './types'

interface SearchResultsProps {
  results: SearchResult[]
  onClose: () => void
}

export const SearchResults = (props: SearchResultsProps) => {
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
