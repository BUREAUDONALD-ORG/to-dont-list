import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../../components/Layout.js";
import Header from "../../components/Header/Header.js";
import ToDontNav from "../../components/ToDontNav/ToDontNav.js";
import Social from "../../components/Social/Social.js";
import Credits from "../../components/Credits/Credits.js";

export default function ifYouDontAdditions({ data }) {
  let settings = data.additionsSettings.edges[0].node;
  let block = data.additionsBlock.edges[0].node;

  return (
    <Layout>
      <Helmet title={settings.frontmatter.title} />
      <div
        className="layout__page-container"
        style={{ "--accent-color": settings.frontmatter.accentColor }}
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
  query additionsQuery {
    additionsSettings: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/additions/additions-settings.md/"
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            accentColor
          }
        }
      }
    }
    additionsBlock: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/additions/additions-block.md/"
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
