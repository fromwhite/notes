import React from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { CMD, Tag } from './geist'
import { ModeSwitcher } from './ModeSwitcher'
import { Button } from './ui'

import dynamic from 'next/dynamic'

const Shortcut = dynamic(() => import('./Shortcut'))

export const Panel = () => {
  const [showShortcut, setShowShortcut] = React.useState(false)

  useHotkeys('mod+k', () => {
    setShowShortcut(!showShortcut)
  })

  useHotkeys('esc', () => {
    setShowShortcut(false)
  })

  return (
    <>
      {/* <Button icon={<CMD />} onClick={() => {}} aria={"CMD"} /> */}

      <Button
        icon={<Tag />}
        onClick={() => setShowShortcut(!showShortcut)}
        aria={'Tag'}
      />

      {showShortcut ? (
        <Shortcut onClose={() => setShowShortcut(false)} />
      ) : null}

      <ModeSwitcher />
    </>
  )
}
