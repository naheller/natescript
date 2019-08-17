import React from 'react'
import { node } from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = ({ children }) => (
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
            <>
                <Header siteTitle={data.site.siteMetadata.title} />
                <Main>{children}</Main>
                <Footer siteTitle={data.site.siteMetadata.title} />
            </>
        )}
    />
)

Layout.propTypes = {
    children: node.isRequired
}

export default Layout
