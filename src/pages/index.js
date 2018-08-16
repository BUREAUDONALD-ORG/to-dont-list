import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Checkbox from '../components/Checkbox.js';
import Product from '../components/Product.js';
import Button from '../components/Button.js';

export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    let products = this.props.data.products.edges;
    this.state = { products: products, timeToRead: 0 };
  }

  toggleProducts = product => {
    let newProducts = this.state.products.map((p, k) => {
      if (p.node.frontmatter.id == product.id) {
        p.node.frontmatter.checkbox.visible = !p.node.frontmatter.checkbox
          .visible;
      }
      return p;
    });
    this.setState({
      products: newProducts
    });
  };

  // timeToRead = () => {
  //   return this.props.data.products.edges.reduce((acc, product) => {
  //     if (this.state.products[product.node.frontmatter.id]) {
  //       acc += product.node.frontmatter.timeToRead;
  //     }
  //     return acc;
  //   }, 0);
  // };

  render() {
    // console.log(this.timeToRead());
    let products = this.state.products;
    return (
      <main className="layout__main">
        <div id="tools" className="layout__checkbox">
          <h2 className="checkboxes__title">
            {this.props.data.site.edges[0].node.frontmatter.checkboxesTitle}
          </h2>
          <div className="checkboxes__container">
            {products.map((product, key) => {
              return (
                <Checkbox
                  key={key}
                  product={product.node.frontmatter}
                  toggleProducts={this.toggleProducts}
                />
              );
            })}
          </div>
          <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {products.reduce((acc, product) => {
              product.node.frontmatter.checkbox.visible && acc++;
              return acc;
            }, 0) && (
              <Button
                className="btn"
                type="point"
                text={
                  this.props.data.site.edges[0].node.frontmatter
                    .checkboxesFooter
                }
              />
            )}
          </ReactCSSTransitionGroup>
        </div>
        <ReactCSSTransitionGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {products
            .filter(product => {
              return product.node.frontmatter.checkbox.visible;
            })
            .map((product, key) => {
              return <Product key={key} product={product.node} />;
            })}
        </ReactCSSTransitionGroup>
      </main>
    );
  }
}

export const productQuery = graphql`
  query productQuery {
    site: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/algemeen.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            checkboxesTitle
            checkboxesFooter
          }
        }
      }
    }
    products: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/products/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            title
            timeToRead
            checkbox {
              title
              text
              visible
            }
            button {
              text
              link
            }
            images {
              default {
                childImageSharp {
                  sizes(maxWidth: 1920) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
              diapositive {
                childImageSharp {
                  sizes(maxWidth: 1920) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            layout
          }
        }
      }
    }
  }
`;
