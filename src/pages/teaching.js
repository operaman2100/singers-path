import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Teaching = () => (
  <Layout>
    <SEO title="Teaching" />
    <h1>Hi from the Teaching page</h1>
    <p>Welcome to Teaching page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Teaching
