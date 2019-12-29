import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "minireset.css"
import "../../styles.css"
import "../../prism-theme.css"

import { Footer, Header } from "src/components"
import { useIsVisible } from "src/hooks"
import { Below, Main, Wrapper } from "./styles"

const Layout = ({ activePage, belowTheWaves, children }) => {
  const [footerRef, footerIsVisible] = useIsVisible()

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Header
            activePage={activePage}
            footerIsVisible={footerIsVisible}
            siteTitle={data.site.siteMetadata.title}
          />
          <Wrapper className="background transition">
            <Main>{children}</Main>
            <Footer />
          </Wrapper>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
