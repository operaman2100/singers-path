import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = () => (
  <Layout>
    <SEO title="Resources" />
    <h1>Hi from Resources</h1>
    <p>Welcome to resources page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Resources
