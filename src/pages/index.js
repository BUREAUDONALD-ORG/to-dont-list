import React from 'react';

import Tabs from '../components/Tabs.js';
import Product from '../components/Product.js';

export default class App extends React.Component {
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
    let product = products[0].node;
    return (
      <main className="layout__main">
        <Tabs products={products} toggleProducts={this.toggleProducts} />
        {products
          .filter(product => {
            console.log(product);
            return this.state.products[product.node.frontmatter.id];
          })
          .map(product => {
            return <Product product={product.node} />;
          })}
      </main>
    );
  }
}

export const productQuery = graphql`
  query productQuery {
    products: allMarkdownRemark(
      filter: { id: { regex: "//pages/frontpage/products/" } }
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
            image
            layout
            link
            linkText
          }
        }
      }
    }
  }
`;
