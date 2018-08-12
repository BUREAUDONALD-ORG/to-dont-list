import React from 'react';

import Tabs from '../components/Tabs.js';
import Product from '../components/Product.js';

export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: {}, timeToRead: 5 };
    this.toggleProducts = this.toggleProducts.bind(this);
    this.timeToRead = this.timeToRead.bind(this);
  }

  toggleProducts(id) {
    this.setState({
      products: {
        ...this.state.products,
        [id]: !this.state.products[id]
      }
    });
  }

  timeToRead() {
    return this.props.data.products.edges.reduce((acc, product) => {
      if (this.state.products[product.node.frontmatter.id]) {
        acc += product.node.frontmatter.timeToRead;
      }
      return acc;
    }, 0);
  }

  render() {
    console.log(this.timeToRead());
    let products = this.props.data.products.edges;
    return (
      <main className="layout__main">
        <Tabs
          products={products}
          activeProducts={this.state.products}
          toggleProducts={this.toggleProducts}
        />
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
          id
          html
          frontmatter {
            id
            title
            subTitle
            checkboxTitle
            checkboxText
            timeToRead
            activated
            image {
              childImageSharp {
                sizes(maxWidth: 1920) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            layout
            link
            linkText
          }
        }
      }
    }
  }
`;
