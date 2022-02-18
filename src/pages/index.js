import React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Contact from "../components/contact"
import "../styles/layout.css"

const index = () => {
  return (
    <Layout>
      <About />
      <Contact />
    </Layout>
  )
}

export default index
