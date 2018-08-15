import React from 'react';

import Checkbox from '../components/Checkbox.js';
import Product from '../components/Product.js';

export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    let products = this.props.data.products.edges;
    this.state = { products: products, timeToRead: 0 };
  }

  toggleProducts = product => {
    console.log('run');
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
          <div className="checkbox__container">
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
        </div>
        {products
          .filter(product => {
            return this.state.products[product.node.frontmatter.id];
          })
          .map((product, key) => {
            return <Product key={key} product={product.node} />;
          })}
      </main>
    );
  }
}

export const productQuery = graphql`
  query productQuery {
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
