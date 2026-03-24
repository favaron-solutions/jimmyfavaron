import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#333", color: "#FFF", minHeight: "100vh" }}>
      <header>
        <Link to="/">Home</Link>
        {/* Add other navigation links as needed */}
      </header>
      <main>{children}</main>
      <footer>{/* Your footer content */}</footer>
    </div>
  )
}

export default Layout
