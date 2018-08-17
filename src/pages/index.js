import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const AnimationGroup = ReactCSSTransitionGroup;

import Checkbox from '../components/Checkbox.js';
import Product from '../components/Product.js';
import Button from '../components/Button.js';

import line from '../../static/img/line.png';
import lineHz from '../../static/img/line-hz.png';

export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: this.props.data.products.edges };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    let scrollY = window.scrollY;
    this.setState({ sticky: scrollY > 100 });
  };

  toggleProducts = product => {
    let count = this.state.products.reduce((acc, p) => {
      acc =
        acc < p.node.frontmatter.checkbox.visible
          ? p.node.frontmatter.checkbox.visible
          : acc;
      return acc;
    }, 0);

    let newProducts = this.state.products.map((p, k) => {
      let pData = p.node.frontmatter;
      if (pData.id == product.id) {
        pData.checkbox.visible = pData.checkbox.visible ? 0 : count + 1;
      }
      return p;
    });

    this.setState({
      products: newProducts
    });
  };

  timeToRead = () => {
    return this.props.data.products.edges.reduce((acc, product) => {
      if (this.state.products[product.node.frontmatter.id]) {
        acc += product.node.frontmatter.timeToRead;
      }
      return acc;
    }, 0);
  };

  selectedProducts = () => {
    return this.state.products
      .filter(product => {
        return product.node.frontmatter.checkbox.visible;
      })
      .sort((a, b) => {
        return (
          a.node.frontmatter.checkbox.visible -
          b.node.frontmatter.checkbox.visible
        );
      });
  };

  showScroll = () => {
    let count = this.state.products.reduce((acc, product) => {
      acc = product.node.frontmatter.checkbox.visible ? acc + 1 : acc;
      return acc;
    }, 0);
    return count;
  };

  render() {
    // console.log(this.timeToRead());
    let products = this.state.products;
    let siteData = this.props.data.site.edges[0].node.frontmatter;
    return (
      <div>
        <header
          data-sticky={this.state.sticky}
          className="layout__block-container layout__header header__container"
        >
          <div className="layout__block header">
            <div className="header__section">
              <pre>
                <h1 className="header__title">{siteData.siteTitle}</h1>
              </pre>
            </div>
            <img className="header__line" src={line} role="presentation" />
            <img className="header__line-hz" src={lineHz} role="presentation" />
            <div className="header__section">
              <pre>
                <h3 className="header__subtitle">{siteData.subTitle}</h3>
              </pre>
              <div className="header__contact">Contact</div>
              <h4 className="header__author">
                {siteData.authorPrefix}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={siteData.authorLink}
                >
                  {siteData.author}
                </a>
              </h4>
            </div>
          </div>
        </header>
        <div className="layout__block-container layout__checkboxes">
          <div className="layout__block">
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
            <AnimationGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {this.showScroll() && (
                <Button
                  className="btn"
                  type="point"
                  text={
                    this.props.data.site.edges[0].node.frontmatter
                      .checkboxesFooter
                  }
                />
              )}
            </AnimationGroup>
          </div>
        </div>
        <AnimationGroup
          transitionName="slide"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.selectedProducts().map(product => {
            return (
              <div
                key={product.node.frontmatter.id}
                id="tools"
                className="layout__block-container layout__products"
              >
                <div className="layout__block">
                  <Product product={product.node} />
                </div>
              </div>
            );
          })}
        </AnimationGroup>
      </div>
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
            siteTitle
            subTitle
            author
            authorLink
            authorPrefix
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
