/* eslint-disable no-undef */
import { useState, useEffect } from 'react'

const matchDark = '(prefers-color-scheme: dark)'

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => window.matchMedia && window.matchMedia(matchDark).matches)

  useEffect(() => {
    const matcher = window.matchMedia(matchDark)
    const onChange = ({ matches }) => setDarkMode(matches)
    matcher.addListener(onChange)

    return () => {
      matcher.removeListener(onChange)
    }
  }, [setDarkMode])

  return darkMode
}

export default useDarkMode
