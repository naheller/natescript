import React from 'react'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'
import { ButtonLink } from '../components/Buttons'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>The home page</h1>
        <p>Go build something great.</p>
        <div>
            <Image />
        </div>
        <ButtonLink linkPath="/page-2/">Go to page 2</ButtonLink>
    </Layout>
)

export default IndexPage
