import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Header from "../components/Header/Header.js";
import ToDontNav from "../components/ToDontNav/ToDontNav.js";
import Form from "../components/Form.js";
import Social from "../components/Social/Social.js";
import Credits from "../components/Credits/Credits.js";
import Products from "../components/Products/Products.js";

export default function indexPage({ data }) {
  let landingPage = data.landingPage.edges[0].node;
  return (
    <Layout>
      <Helmet title={landingPage.frontmatter.title} />
      <div
        className="layout__page-container"
        style={{
          "--accent-color": "var(--purple)",
          "--selection-color": "var(--purple)",
        }}
      >
        <Header />
        <ToDontNav />
        <Products />
        <Form />
        <Social />
        <Credits />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query landingPageQuery {
    landingPage: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/landing-page/landing-page-settings.md/"
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
