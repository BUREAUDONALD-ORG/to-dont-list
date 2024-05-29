import React from "react";
import Layout from "../../components/Layout.js";
import { graphql } from "gatsby";

import Header from "../../components/Header/Header.js";
import ToDontNav from "../../components/ToDontNav/ToDontNav.js";
import Social from "../../components/Social/Social.js";
import Credits from "../../components/Credits/Credits.js";
import Form from "../../components/Form.js";
import About from "../../components/About/About.js";
import ProductImage from "../../components/Products/Product-image.js";
import Button from "../../components/Button.js";

export default function ifYouDontAbout({ data }) {
  const product = data.products.edges[0].node;
  const about = data.about.edges[0].node;
  const diapositive = false;

  console.log(product);
  return (
    <Layout>
      <div
        className="layout__page-container"
        style={{ "--accent-color": about.frontmatter.accentColor }}
      >
        <Header size="small" fixed={true} />
        <ToDontNav />

        <div
          data-layout={product.frontmatter.layout}
          data-diapositive={diapositive}
          className="layout__product-container"
          style={{ "--accent-color": product.frontmatter.accentColor }}
        >
          <ProductImage
            diapositive={diapositive}
            images={product.frontmatter.images}
            layout={product.frontmatter.layout}
          />

          <div className="layout__product">
            <div className="product__content">
              <div
                className="markdown"
                dangerouslySetInnerHTML={{
                  __html: product.html,
                }}
              />

              {product.frontmatter.buttons.map((btn, key) => {
                return (
                  <Button
                    text={btn.text}
                    link={btn.link}
                    accentColor={product.frontmatter.accentColor}
                    key={key}
                    position={key}
                    diapositive={diapositive}
                  />
                );
              })}
            </div>
          </div>
        </div>

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
      filter: { fileAbsolutePath: { regex: "//content/ifyoudont/about.md/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            accentColor
          }
        }
      }
    }
    products: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/frontpage/products/if-you-dont.md/"
        }
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
          }
        }
      }
    }
  }
`;
