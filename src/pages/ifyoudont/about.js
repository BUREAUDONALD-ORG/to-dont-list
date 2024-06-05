import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../../components/Layout.js";
import Header from "../../components/Header/Header.js";
import ToDontNav from "../../components/ToDontNav/ToDontNav.js";
import Social from "../../components/Social/Social.js";
import Credits from "../../components/Credits/Credits.js";
import Form from "../../components/Form.js";
import About from "../../components/About/About.js";
import Product from "../../components/Products/Product.js";

export default function ifYouDontAbout({ data }) {
  const product = data.products.edges[0];
  const about = data.about.edges[0].node;

  return (
    <Layout>
      <Helmet title={about.frontmatter.title} />
      <div
        className="layout__page-container"
        style={{ "--accent-color": about.frontmatter.accentColor }}
      >
        <Header size="small" fixed={true} />
        <ToDontNav />
        <Product product={product} diapositive={false} />
        <About />
        <Social />
        <Form />
        <Credits />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query aboutQuery {
    about: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/about/about-settings.md/"
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
    products: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//content/products/if-you-dont.md/" }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            timeToRead
            checkbox {
              title
              text
              smallText
              visible
            }
            buttons {
              text
              link
            }
            images {
              default {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                }
              }
              diapositive {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            layout
            accentColor
            fontFamily
          }
        }
      }
    }
  }
`;
