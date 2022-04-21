import * as React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import DWChart from "react-datawrapper-chart"
import Header from "./Header"
import Footer from "./Footer"
import Figure from "./Figure"

const shortcodes = { Link, DWChart, Figure }

export default function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <Header />
      <main>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>
      <Footer />
    </div>
  )
}