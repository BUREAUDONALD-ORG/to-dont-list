import React from 'react';

import Tabs from '../components/Tabs.js';

import iphone from '../../static/img/iphone.png';

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
        <article id="viewer" className="layout__viewer">
          <div className="viewer viewer--app">
            <div>
              <pre>
                <h1 className="viewer__title">{product.frontmatter.title}</h1>
              </pre>
              <div
                className="viewer__content viewer__content--app"
                dangerouslySetInnerHTML={{ __html: product.html }}
              />
              <div className="button__container">
                <div className="button button--wide">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={product.frontmatter.link}
                  >
                    <h1 className="button__text">
                      {product.frontmatter.linkText}
                    </h1>
                  </a>
                </div>
              </div>
            </div>
            <div className="viewer__iphone-container">
              <img alt="Iphone App" className="viewer__iphone" src={iphone} />
            </div>
          </div>
        </article>
      </main>
    );
  }
}
//
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
