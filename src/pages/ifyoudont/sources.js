import React from "react";
import Layout from "../../components/Layout.js";
import { graphql } from "gatsby";

import Header from "../../components/Header/Header.js";
import ToDontNav from "../../components/ToDontNav/ToDontNav.js";
import Social from "../../components/Social/Social.js";
import Credits from "../../components/Credits/Credits.js";

export default function ifYouDontSources({ data }) {
  let html = data.sources.edges[0].node.html;
  let frontmatter = data.sources.edges[0].node.frontmatter;

  return (
    <Layout>
      <div
        className="layout__page-container"
        style={{ "--accent-color": frontmatter.accentColor }}
      >
        <Header size="small" fixed={true} />
        <ToDontNav />
        <div className="layout__sources-container">
          <div className="layout__sources">
            <h1 className="sources__title">{frontmatter.title}</h1>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: html,
              }}
            />
          </div>
        </div>
        <Social />
        <Credits />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query sourcesQuery {
    sources: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/sources.md/"
        }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            accentColor
          }
        }
      }
    }
  }
`;
