import React, { useContext } from 'react'
import { node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import ThemeContext from '../context/ThemeContext'
import Header from './Header'

const Layout = ({ children }) => {
    const { isDark } = useContext(ThemeContext)

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <div className={isDark ? 'dark' : 'light'}>
                    <Header siteTitle={data.site.siteMetadata.title} />
                    {children}
                    <footer>Footer</footer>
                </div>
            )}
        />
    )
}

Layout.propTypes = {
    children: node.isRequired
}

export default Layout
