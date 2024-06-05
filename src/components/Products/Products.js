import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import stableSort from "stable";

import NavItem from "../Nav-item.js";
import Checkbox from "./Checkbox.js";
import Button from "../Button.js";
import Product from "./Product.js";

export default function Products() {
  const data = useStaticQuery(productsQuery);
  return <ProductsInner data={data} />;
}

const productsQuery = graphql`
  query productsQuery {
    checkboxes: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/landing-page/checkboxes-block.md/"
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            footer
          }
        }
      }
    }
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//content/products/" } }
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

class ProductsInner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data.products.edges,
      initialProducts: JSON.parse(
        JSON.stringify(this.props.data.products.edges)
      ).sort((a, b) => {
        return a.node.frontmatter.id > b.node.frontmatter.id;
      }),
      scroll: { resizeHeader: false, position: 0 },
    };
  }

  toggleProducts = (product) => {
    let count = this.countSelectedProducts();

    // do simple
    let newProducts = this.state.products.map((p, k) => {
      let pData = p.node.frontmatter;
      if (pData.id === product.id) {
        if (!pData.checkbox.visible && count < 3) {
          count++;
          pData.checkbox.visible = 4;
        } else {
          pData.checkbox.visible = 0;
        }
      }
      return p;
    });

    // Reset the numbers to proper --> Can probably done waaaaay smarter
    count = 0;
    newProducts = newProducts.map((p, k) => {
      let pData = p.node.frontmatter;
      if (pData.checkbox.visible > 0) {
        count++;
        pData.checkbox.visible = count;
      }
      return p;
    });

    // Sort products
    newProducts = stableSort(newProducts, (a, b) => {
      if (a.node.frontmatter.checkbox.visible === 0) {
        return 1;
      } else if (b.node.frontmatter.checkbox.visible === 0) {
        return -1;
      } else if (
        a.node.frontmatter.checkbox.visible ===
        b.node.frontmatter.checkbox.visible
      ) {
        return null;
      } else if (true) {
        return a.node.frontmatter.checkbox.visible <
          b.node.frontmatter.checkbox.visible
          ? -1
          : 1;
      }
    });

    this.setState({
      products: newProducts,
    });
  };

  selectedProducts = () => {
    return this.state.products.filter((product) => {
      return product.node.frontmatter.checkbox.visible;
    });
  };

  countSelectedProducts = () => {
    return this.state.products.reduce((acc, p) => {
      p.node.frontmatter.checkbox.visible > 0 && acc++;
      return acc;
    }, 0);
  };

  // this function is used to determine the size of the header
  scrollTriggers = () => {
    if (typeof window !== "undefined") {
      let scrollY = window.scrollY;
      let navbarElem = document.querySelector(".layout__navbar-container");
      let navbarPos = navbarElem ? navbarElem.offsetTop : 400;
      let navbarOffset = navbarPos - 130;

      return {
        header: this.state.scroll.position < 400 ? "large" : "small",
        nav: scrollY > navbarOffset,
      };
    } else {
      return {
        header: "large",
        nav: false,
      };
    }
  };

  // so this code is very much required to make the sticky nav work
  handleScroll = (e) => {
    if (typeof window !== "undefined") {
      this.setState({
        scroll: {
          position: window.scrollY,
        },
      });
    }
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.handleScroll);
    }
  }

  render() {
    let checkboxes = this.props.data.checkboxes.edges[0].node.frontmatter;
    let products = this.state.products;
    let initialProducts = this.state.initialProducts;

    return (
      <>
        <div className="layout__products-container">
          <div className="layout__checkboxes-container">
            <div className="layout__checkboxes">
              <h1
                className="checkboxes__title"
                style={{ "--selection-color": "var(--white)" }}
              >
                {checkboxes.title}
              </h1>
              <h3
                className="checkboxes__subtitle"
                style={{ "--selection-color": "var(--white)" }}
              >
                {checkboxes.subtitle}
              </h3>
              <div
                className="checkboxes__container"
                style={{ "--selection-color": "var(--purple)" }}
                s
              >
                {initialProducts.map((product, key) => {
                  product = products.find((p) => {
                    return (
                      product.node.frontmatter.id === p.node.frontmatter.id
                    );
                  });
                  return (
                    <Checkbox
                      key={key}
                      product={product.node.frontmatter}
                      toggleProducts={this.toggleProducts}
                      disabled={
                        this.countSelectedProducts() > 2 &&
                        product.node.frontmatter.checkbox.visible < 1
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="layout__navbar-container">
            <div
              className="layout__navbar"
              style={{ "--selection-color": "var(--white)" }}
            >
              {!this.scrollTriggers().nav &&
                this.countSelectedProducts() > 0 && (
                  <Button
                    className="btn"
                    type="point"
                    text={checkboxes.footer}
                    link="layout__product"
                  />
                )}
              {this.scrollTriggers().nav &&
                this.selectedProducts().map((product, key) => {
                  return (
                    <NavItem
                      key={key}
                      product={product.node.frontmatter}
                      toggleProducts={this.toggleProducts}
                    />
                  );
                })}
            </div>
          </div>

          <div>
            {this.selectedProducts().map((product, key) => {
              return (
                <Product product={product} diapositive={key === 1} key={key} />
              );
            })}
          </div>
        </div>

        {this.selectedProducts() < 1 && (
          <div className="layout__line-container" />
        )}
      </>
    );
  }
}
