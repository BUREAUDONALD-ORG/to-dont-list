import React from 'react';

// import Tabs from '../partials/tabs.jsx';
//
// import app from '../content/app.md';
import iphone from '../../static/img/iphone.png';

export default class App extends React.Component {
  render() {
    let product = this.props.data.products.edges[0].node;
    console.log(product);
    return (
      <main className="layout__main">
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
