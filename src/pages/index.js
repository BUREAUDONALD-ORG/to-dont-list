import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const AnimationGroup = ReactCSSTransitionGroup;
import slugify from 'slugify';
import Img from 'gatsby-image';
import { throttle, debounce } from 'lodash';

import NavItem from '../components/Nav-item.js';
import Checkbox from '../components/Checkbox.js';
import Product from '../components/Product.js';
import Button from '../components/Button.js';
import Form from '../components/Form.js';

import line from '../../static/img/line.png';
import lineHz from '../../static/img/line-hz.png';

export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data.products.edges,
      scroll: { resizeHeader: false, transitionCheckboxes: false }
    };
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      debounce(this.handleScroll, 25, { leading: false, trailing: true })
      // this.handleScroll
    );
  }

  handleScroll = e => {
    // console.log('handling');
    let scrollY = window.scrollY;

    this.setState({
      scroll: {
        resizeHeader: scrollY > 200,
        transitionCheckboxes: scrollY > 400
      }
    });
  };

  toggleProducts = (product, sticky, e) => {
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
    let formData = this.props.data.form.edges[0].node.frontmatter;
    return (
      <div className="layout__page-container">
        <header
          data-size={this.state.scroll.resizeHeader ? 'small' : 'large'}
          className="layout__header-container"
        >
          <div className="layout__header">
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
        </header>

        <div className="layout__products-container">
          <div className="layout__checkboxes-container">
            <div className="layout__checkboxes" data-sticky={this.state.sticky}>
              <h2 className="checkboxes__title">
                {
                  this.props.data.site.edges[0].node.frontmatter.checkboxes
                    .title
                }
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
            </div>
          </div>
          <div className="layout__navbar-container">
            <div className="layout__navbar" data-sticky={this.state.sticky}>
              {this.selectedProducts().map((product, key) => {
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
                  className="layout__product-container"
                >
                  <div className="product__image">
                    <Img
                      sizes={
                        product.node.frontmatter.images.default.childImageSharp
                          .sizes
                      }
                    />
                  </div>
                  <div className="layout__product">
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

        <Form data={formData} />

        <div className="layout__social-container">
          <div className="layout__social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={siteData.hashtag.link}
              className="social__hashtag"
            >
              <img
                src={siteData.hashtag.image.relativePath}
                alt="#ToDontList"
                className="social__hashtag"
              />
            </a>
            <div className="social__text-container">
              <p className="social__text">{siteData.socialText[0]}</p>
              <p className="social__text">{siteData.socialText[1]}</p>
            </div>
            <div className="button__container">
              {siteData.socialbtn.map((btn, key) => {
                return (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={btn.link}
                    key={key}
                    className="button"
                  >
                    <img
                      className="button__img"
                      src={btn.image.relativePath}
                      role="presentation"
                    />
                    <img
                      className="button__img button__img--hover"
                      src={btn.imageInverse.relativePath}
                      role="presentation"
                    />
                    <h1 className="button__text">{btn.text}</h1>
                  </a>
                );
              })}
              <div className="social__placeholder" />
            </div>
          </div>
        </div>
        <div className="layout__credits-container">
          <div className="layout__credits">
            <h1 className="credits__title">{siteData.creditsTitle}</h1>
            <div
              className="credits__text"
              dangerouslySetInnerHTML={{
                __html: this.props.data.site.edges[0].node.html
              }}
            />
          </div>
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
            hashtag {
              link
              alt
              image {
                relativePath
              }
            }
            socialbtn {
              text
              link
              image {
                relativePath
              }
              imageInverse {
                relativePath
              }
            }
            socialText
            creditsTitle
          }
          html
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
    form: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/form.md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            fields {
              text
            }
            ccField
            submit
            submitResponse
            submitExpandedResponse
            mailTo
          }
        }
      }
    }
  }
`;

{
  /* <AnimationGroup
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
} */
}
