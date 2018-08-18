import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const AnimationGroup = ReactCSSTransitionGroup;
import slugify from 'slugify';
import Img from 'gatsby-image';
import { throttle, debounce } from 'lodash';

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
    window.addEventListener(
      'scroll',
      debounce(this.handleScroll, 24, { leading: true, trailing: true })
      // throttle(this.handleScroll, 50)
    );
  }

  handleScroll = e => {
    console.log('handling');
    let scrollY = window.scrollY;
    let count = this.state.products.reduce((acc, p) => {
      p.node.frontmatter.checkbox.visible && acc++;
      return acc;
    }, 0);

    count && this.setState({ sticky: scrollY > 50 });
  };

  toggleProducts = (product, sticky, e) => {
    if (!sticky) {
      let count = this.state.products.reduce((acc, p) => {
        p.node.frontmatter.checkbox.visible && acc++;
        return acc;
      }, 0);

      let newProducts = this.state.products.map((p, k) => {
        let pData = p.node.frontmatter;
        if (pData.id == product.id) {
          pData.checkbox.visible =
            !pData.checkbox.visible && count < 3 ? count + 1 : 0;
        }
        return p;
      });

      this.setState({
        products: newProducts
      });
    } else {
      // this.scrollTo(this.props.to, this.props);
    }
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
    return this.state.products.filter(product => {
      return product.node.frontmatter.checkbox.visible;
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
      <div className="layout__page-container">
        <header
          data-sticky={this.state.sticky}
          className="layout__header header__container"
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
              <div className="header__contact">{siteData.contact.title}</div>
              <h4 className="header__author">
                {siteData.author.prefix}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={siteData.author.link}
                >
                  {siteData.author.name}
                </a>
              </h4>
            </div>
          </div>
          <div className="layout__block-container layout__checkboxes">
            <div className="layout__block">
              <h2 className="checkboxes__title" data-sticky={this.state.sticky}>
                {
                  this.props.data.site.edges[0].node.frontmatter.checkboxes
                    .title
                }
              </h2>
              <div
                className="checkboxes__container"
                data-sticky={this.state.sticky}
              >
                {products.map((product, key) => {
                  return (
                    <Checkbox
                      key={key}
                      sticky={this.state.sticky}
                      product={product.node.frontmatter}
                      toggleProducts={this.toggleProducts}
                    />
                  );
                })}
              </div>

              {/* <AnimationGroup
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
              </AnimationGroup> */}
            </div>
          </div>
        </header>

        <div className="layout__products" data-sticky={this.state.sticky}>
          <AnimationGroup
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.selectedProducts().map(product => {
              return (
                <div
                  id={slugify(product.node.frontmatter.checkbox.title)}
                  key={product.node.frontmatter.id}
                  data-layout={product.node.frontmatter.layout}
                  className="layout__product-container product"
                >
                  <div className="product__image">
                    <Img
                      sizes={
                        product.node.frontmatter.images.default.childImageSharp
                          .sizes
                      }
                    />
                  </div>
                  <div className="layout__block product__block">
                    <div className="product__content">
                      <pre>
                        <h1 className="product__title">
                          {product.node.frontmatter.title}
                        </h1>
                      </pre>
                      <div
                        className="markdown"
                        dangerouslySetInnerHTML={{
                          __html: product.node.html
                        }}
                      />
                      <Button text={product.node.frontmatter.button.text} />
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimationGroup>
        </div>
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
            author {
              link
              name
              prefix
            }
            contact {
              title
              link
            }
            checkboxes {
              title
              footer
            }
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
