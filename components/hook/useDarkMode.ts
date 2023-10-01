'use client'
import React, { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [theme, set] = useState(
    (typeof window !== 'undefined' && localStorage.getItem('MODE')) || 'dark'
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light-theme', 'dark-theme')

    if ('dark' === theme) {
      let prefers = '(prefers-color-scheme: dark)',
        matchMedia = window.matchMedia(prefers)

      if (matchMedia.media !== prefers || matchMedia.matches) {
        root.style.colorScheme = 'dark'
        root.classList.add('dark-theme')
      } else {
        root.style.colorScheme = 'light'
        root.classList.add('light-theme')
      }
    } else if (theme) {
      let mode = { light: 'light-theme', dark: 'dark-theme' } as any
      root.classList.add(theme ? mode[theme] : '')
    }

    if (theme === 'light' || theme === 'dark') root.style.colorScheme = theme
  }, [theme])

  return [
    theme,
    (theme: string) => {
      localStorage.setItem('MODE', theme)
      set(theme)
    },
  ] as const
}
