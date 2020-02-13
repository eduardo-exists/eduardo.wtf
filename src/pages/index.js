import React from "react"
import { Layout, SEO, WaveSection,Link } from "src/components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <WaveSection>
      <h1 className="intro-title">Hello!</h1>
      <p>
        This site is a work in progress! Soon this will be a centralized hub of
        stuff about ed!
      </p>
      <br />
      <p>
        <Link to="/blog" button>
          All Posts
        </Link>
        &nbsp;
        <Link to="/projects" secondary button>
          Projects
        </Link>
        &nbsp;
        <Link to={"/eduardo_escoto_resume.pdf"} external secondary button>
          Resume
        </Link>
      </p>
    </WaveSection>
  </Layout>
)

export default IndexPage
