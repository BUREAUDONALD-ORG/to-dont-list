import React from "react";
import Layout from "../../components/Layout.js";
import { graphql } from "gatsby";

import Header from "../../components/Header/Header.js";
import ToDontNav from "../../components/ToDontNav/ToDontNav.js";
import Social from "../../components/Social/Social.js";
import Credits from "../../components/Credits/Credits.js";

export default function ifYouDontSources({
  data: {
    sources: { edges },
  },
}) {
  let html = edges[0].node.html;
  let title = edges[0].node.frontmatter.title;
  return (
    <Layout>
      <div className="layout__page-container">
        <Header />
        <ToDontNav />
        <div className="layout__credits-container">
          <div className="layout__credits">
            <h1 className="credits__title">{title}</h1>
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
      filter: { fileAbsolutePath: { regex: "//content/ifyoudont/sources.md/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
