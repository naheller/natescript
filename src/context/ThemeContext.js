import React, { createContext, useState } from 'react'
import { node } from 'prop-types'

import { themeLight, themeDark } from '../utils/constants'

const hourOfDay = new Date().getHours()
const isNight = hourOfDay <= 6 || hourOfDay >= 18

const defaultContextState = {
  isDark: isNight,
  toggleDark: () => {},
  theme: isNight ? themeDark : themeLight
}

const ThemeContext = createContext(defaultContextState)

const ThemeProvider = ({ children }) => {
  const [isDark, setDark] = useState(defaultContextState.isDark)

  const toggleDark = () => {
    setDark(!isDark)
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleDark,
        theme: isDark ? themeDark : themeLight
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: node.isRequired
}

export default ThemeContext

export { ThemeProvider }
