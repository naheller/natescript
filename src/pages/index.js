import React from 'react'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'
import { ButtonLink } from '../components/Buttons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>The home page</h1>
    <h3>Site under construction</h3>
    <h4>A longer subheader with more words for reading</h4>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book.
    </p>
    <div>
      <Image />
    </div>
    <ButtonLink linkPath="/page-2/">Go to second page</ButtonLink>
  </Layout>
)

export default IndexPage
