import React from 'react'

import Layout from '../components/Layout'
import { ButtonLink } from '../components/Buttons'
import SEO from '../components/SEO'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>The second page</h1>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
      classical Latin literature from 45 BC, making it over 2000 years old.
    </p>
    <p>
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
      alteration in some form, by injected humour, or randomised words which don&apos;t look even
      slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure
      there isn&apos;t anything embarrassing hidden in the middle of text.
    </p>
    <p>
      All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
      words, combined with a handful of model sentence structures, to generate Lorem Ipsum which
      looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected
      humour, or non-characteristic words etc.
    </p>
    <ButtonLink linkPath="/">Go to home page</ButtonLink>
  </Layout>
)

export default SecondPage
