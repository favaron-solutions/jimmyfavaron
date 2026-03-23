import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to Jimmy Favaron's Site Recreation</h1>
      <p>This is a Gatsby site with a dark theme.</p>
      <StaticImage
        src="../images/sample-image.jpg" // replace with your image
        alt="A sample image"
        placeholder="blurred"
      />
    </Layout>
  )
}

export default IndexPage
