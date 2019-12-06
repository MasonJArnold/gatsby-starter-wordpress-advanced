import React from "react"

import Layout from "../../components/Layout"
import SEO from "../../components/SEO"
// import FluidImage from "../../components/FluidImage"


const Page = ({ pageContext }) => {
  const {
    page: { title, content, featuredImage },
  } = pageContext;

  return (
    <Layout>
      <SEO title={title} />

      {/*<FluidImage image={featuredImage} style={{marginBottom: '15px'}} />*/}
      {/*<FluidImage image={null}  />*/}


      <h1> {title} </h1>
      <div dangerouslySetInnerHTML={{__html: content}} />

    </Layout>
  )
}

export default Page
