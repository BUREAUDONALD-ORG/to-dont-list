import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../../components/Layout.js";
import Header from "../../components/Header/Header.js";
import ToDontNav from "../../components/ToDontNav/ToDontNav.js";
import Social from "../../components/Social/Social.js";
import Credits from "../../components/Credits/Credits.js";

export default function ifYouDontSources({ data }) {
  let settings = data.sourcesSettings.edges[0].node;
  let block = data.sourcesBlock.edges[0].node;

  return (
    <Layout>
      <Helmet title={settings.frontmatter.title} />
      <div
        className="layout__page-container"
        style={{
          "--accent-color": "var(--yellow)",
          "--selection-color": "var(--yellow)",
        }}
      >
        <Header size="small" fixed={true} />
        <ToDontNav />
        <div className="layout__sources-container">
          <div className="layout__sources">
            <h1 className="sources__title">{block.frontmatter.title}</h1>
            <div
              className="markdown"
              dangerouslySetInnerHTML={{
                __html: block.html,
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
    sourcesSettings: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/sources/sources-settings.md/"
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
    sourcesBlock: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/sources/sources-block.md/"
        }
      }
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
