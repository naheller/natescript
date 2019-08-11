import React, { createContext, useState, useEffect } from 'react'
import { node } from 'prop-types'

import { themeLight, themeDark } from '../utils/constants'

const defaultContextState = {
    isDark: false,
    toggleDark: () => {},
    theme: themeLight
}

const ThemeContext = createContext(defaultContextState)

// Need macOS Mojave + Safari Technology Preview Release 68 to test this currently.
const supportsDarkMode = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeProvider = ({ children }) => {
    const [isDark, setDark] = useState(defaultContextState.isDark)

    useEffect(() => {
        const storedDark = JSON.parse(localStorage.getItem('dark'))

        if (storedDark) {
            setDark(storedDark)
        } else if (supportsDarkMode()) {
            setDark(true)
        }
    }, [])

    const toggleDark = () => {
        localStorage.setItem('dark', JSON.stringify(!isDark))
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
