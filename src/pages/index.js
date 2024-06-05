import React from "react";
import Layout from "../components/Layout";

import Header from "../components/Header/Header.js";
import ToDontNav from "../components/ToDontNav/ToDontNav.js";
import Form from "../components/Form.js";
import Social from "../components/Social/Social.js";
import Credits from "../components/Credits/Credits.js";
import Products from "../components/Products/Products.js";

export default function indexPage() {
  return (
    <Layout>
      <div
        className="layout__page-container"
        style={{ "--accent-color": "#fafafa" }}
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
  query sourcesQuery {
    sources: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/landing-page/landing-page.md/"
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
