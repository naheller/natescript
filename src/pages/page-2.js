import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import { Button } from '../components/Buttons'
import SEO from '../components/SEO'

const SecondPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Button>Click me</Button>
        <Button>Click me too</Button>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default SecondPage
