import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { string } from 'prop-types'

import ThemeContext from '../context/ThemeContext'
import { Button } from './Buttons'

const Header = ({ siteTitle }) => {
    const { isDark, toggleDark } = useContext(ThemeContext)

    return (
        <div>
            <h1 style={{ margin: 0 }}>
                <Link to="/">{siteTitle}</Link>
            </h1>
            <Button onClick={toggleDark}>
                {isDark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
            </Button>
        </div>
    )
}

Header.propTypes = {
    siteTitle: string.isRequired
}

export default Header
