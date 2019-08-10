import { Link } from 'gatsby'
import { string } from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
    <header>
        <div>
            <h1>
                <Link to="/">
                    {siteTitle}
                </Link>
            </h1>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
