import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const AnimationGroup = ReactCSSTransitionGroup;
import slugify from 'slugify';
import Img from 'gatsby-image';
import { throttle, debounce } from 'lodash';
import stableSort from 'stable';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import { Motion, spring } from 'react-motion';

import NavItem from '../components/Nav-item.js';
import Checkbox from '../components/Checkbox.js';
import Product from '../components/Product.js';
import Button from '../components/Button.js';
import Form from '../components/Form.js';

import line from '../../static/img/line.png';
import lineHz from '../../static/img/line-hz.png';
import lineShort from '../../static/img/line-short.png';

export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data.products.edges,
      initialProducts: JSON.parse(
        JSON.stringify(this.props.data.products.edges)
      ),
      scroll: { resizeHeader: false, position: 0 }
    };
  }

  componentDidMount() {
    window.addEventListener(
      'scroll',
      this.handleScroll
      // debounce(this.handleScroll, 25, { leading: true, trailing: true })
    );
  }

  // componentDidMount() {
  //   window.addEventListener(
  //     'touchmove',
  //     this.handleScroll
  //     // debounce(this.handleScroll, 25, { leading: true, trailing: true })
  //   );
  // }

  toggleProducts = (product, sticky, e) => {
    let count = this.countSelectedProducts();

    // do simple
    let newProducts = this.state.products.map((p, k) => {
      let pData = p.node.frontmatter;
      if (pData.id == product.id) {
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
      } else if (false) {
        return a.node.frontmatter.checkbox.visible <
          b.node.frontmatter.checkbox.visible
          ? 1
          : -1;
      }
    });

    this.setState({
      products: newProducts
    });
  };

  selectedProducts = () => {
    return this.state.products.filter(product => {
      return product.node.frontmatter.checkbox.visible;
    });
  };

  countSelectedProducts = () => {
    return this.state.products.reduce((acc, p) => {
      p.node.frontmatter.checkbox.visible > 0 && acc++;
      return acc;
    }, 0);
  };

  handleScroll = e => {
    let scrollY = window.scrollY;

    this.setState({
      scroll: {
        resizeHeader: scrollY > 10,
        collapseHeader: scrollY > 300,
        showNav: scrollY > 800,
        position: scrollY
      }
    });
  };

  showScroll = () => {
    let count = this.state.products.reduce((acc, product) => {
      acc = product.node.frontmatter.checkbox.visible ? acc + 1 : acc;
      return acc;
    }, 0);
    return count;
  };

  scrollAnimations = () => {
    let a = {
      title: {
        fontSize: 12 - this.state.scroll.position / 300 * 8,
        lineHeight: 7.5 - this.state.scroll.position / 300 * 3.5
      },
      subTitle: {
        fontSize: 4 - this.state.scroll.position / 300 * 2.5,
        lineHeight: 4 - this.state.scroll.position / 300 * 2.5
      },
      line: {
        height: 26.5 - this.state.scroll.position / 400 * 22.5
      }
    };

    return {
      title: {
        fontSize: `${a.title.fontSize > 4 ? a.title.fontSize : 4}rem`,
        lineHeight: `${a.title.lineHeight > 3.5 ? a.title.lineHeight : 3.5}rem`
      },
      subTitle: {
        fontSize: `${a.subTitle.fontSize > 1.5 ? a.subTitle.fontSize : 1.5}rem`,
        lineHeight: `${
          a.subTitle.lineHeight > 1.5 ? a.subTitle.lineHeight : 1.5
        }rem`
      },
      line: {
        height: `${a.line.height > 4 ? a.line.height : 4}rem`
      }
    };
  };

  render() {
    let header = this.props.data.header.edges[0].node.frontmatter;
    let checkboxes = this.props.data.checkboxes.edges[0].node.frontmatter;
    let products = this.state.products;
    let initialProducts = this.state.initialProducts;
    let form = this.props.data.form.edges[0].node.frontmatter;
    let social = this.props.data.social.edges[0].node.frontmatter;
    let credits = this.props.data.credits.edges[0].node.frontmatter;
    return (
      <div className="layout__page-container">
        <header
          data-size={
            !this.state.scroll.resizeHeader
              ? 'large'
              : !this.state.scroll.collapseHeader ? 'medium' : 'small'
          }
          className="layout__header-container"
        >
          <div className="layout__header">
            <div className="header__section">
              <pre>
                <h1
                  style={this.scrollAnimations().title}
                  className="header__title"
                >
                  {header.title}
                </h1>
              </pre>
            </div>
            <img
              className="header__line"
              src={line}
              role="presentation"
              style={this.scrollAnimations().line}
            />
            <img
              className="header__line-short"
              src={lineShort}
              role="presentation"
            />
            <img className="header__line-hz" src={lineHz} role="presentation" />
            <div className="header__section">
              <pre>
                <h3
                  style={this.scrollAnimations().subTitle}
                  className="header__subtitle"
                >
                  {header.subTitle}
                </h3>
              </pre>
              <h4 className="header__contact">
                <ScrollLink
                  rel="noopener noreferrer"
                  target="_blank"
                  to={header.contact.link}
                  smooth={true}
                  offset={-300}
                  duration={500}
                >
                  {header.contact.title}
                </ScrollLink>
              </h4>
              <h4 className="header__author">
                {header.author.prefix}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={header.author.link}
                >
                  {header.author.name}
                </a>
              </h4>
            </div>
          </div>
        </header>

        <div className="layout__products-container">
          <div className="layout__checkboxes-container">
            <div className="layout__checkboxes" data-sticky={this.state.sticky}>
              <h2 className="checkboxes__title">{checkboxes.title}</h2>
              <div className="checkboxes__container">
                {initialProducts.map((product, key) => {
                  product = products.find(p => {
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
            {/* <div className="layout__navbar"> */}
            <AnimationGroup
              transitionName="fade"
              transitionEnterTimeout={100}
              transitionLeaveTimeout={100}
              className="layout__navbar"
            >
              {!this.state.scroll.showNav &&
                this.countSelectedProducts() > 0 && (
                  <Button
                    className="btn"
                    type="point"
                    text={checkboxes.footer}
                  />
                )}
              {this.state.scroll.showNav &&
                this.selectedProducts().map((product, key) => {
                  return (
                    <NavItem
                      key={key}
                      product={product.node.frontmatter}
                      toggleProducts={this.toggleProducts}
                    />
                  );
                })}
            </AnimationGroup>
            {/* </div> */}
          </div>

          <AnimationGroup
            transitionName="slide"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.selectedProducts().map((product, key) => {
              let frontmatter = product.node.frontmatter;
              let diapositive = key === 1;
              return (
                <div
                  id={slugify(frontmatter.checkbox.title)}
                  key={frontmatter.id}
                  data-layout={frontmatter.layout}
                  data-diapositive={diapositive}
                  className="layout__product-container"
                >
                  <div className="product__image">
                    {(() => {
                      if (
                        frontmatter.images &&
                        frontmatter.images.default &&
                        frontmatter.images.diapositive
                      ) {
                        return (
                          <Img
                            sizes={
                              !diapositive
                                ? frontmatter.images &&
                                  frontmatter.images.default &&
                                  frontmatter.images.default.childImageSharp
                                    .sizes
                                : frontmatter.images &&
                                  frontmatter.images.diapositive &&
                                  frontmatter.images.diapositive.childImageSharp
                                    .sizes
                            }
                          />
                        );
                      }
                    })()}
                  </div>
                  <div className="layout__product">
                    <div className="product__content">
                      <h1 className="product__title">{frontmatter.title}</h1>
                      <div
                        className="markdown"
                        dangerouslySetInnerHTML={{
                          __html: product.node.html
                        }}
                      />
                      <Button
                        text={frontmatter.button.text}
                        position={key}
                        diapositive={diapositive}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </AnimationGroup>
        </div>

        {this.selectedProducts() < 1 && (
          <div className="layout__line-container" />
        )}
        <Form data={form} />

        <div className="layout__social-container">
          <div className="layout__social">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={social.hashtag.link}
              className="social__hashtag"
            >
              <img
                src={social.hashtag.image.relativePath}
                alt="#ToDontList"
                className="social__hashtag"
              />
            </a>
            <div className="social__text-container">
              <p className="social__text">{social.text[0].line}</p>
              <p className="social__text">{social.text[1].line}</p>
            </div>
            <div className="btn__container">
              {social.btn.map((btn, key) => {
                return <Button {...btn} key={key} type="image" />;
              })}
              <div className="social__placeholder" />
            </div>
          </div>
        </div>
        <div className="layout__credits-container">
          <div className="layout__credits">
            <h1 className="credits__title">{credits.title}</h1>
            <div className="credits__text">
              <p>
                {credits.authorsText}
                {credits.authors.map((author, key) => {
                  if (author.link) {
                    return (
                      <span key={key}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={author.link}
                        >
                          {author.name}
                        </a>
                        {', '}
                      </span>
                    );
                  } else {
                    return (
                      <span key={key}>
                        {author.name}
                        {key === credits.authors.length - 1 ? ', ' : ', '}
                      </span>
                    );
                  }
                })}
                {credits.partnersText}
                {credits.partners.map((partner, key) => {
                  if (partner.link) {
                    return (
                      <span key={key}>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={partner.link}
                        >
                          {partner.name}
                        </a>
                        {key === credits.partners.length - 1 ? '. ' : ', '}
                      </span>
                    );
                  } else {
                    return (
                      <span key={key}>
                        {partner.name}
                        {key === credits.partners.length - 1 ? '. ' : ', '}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const productQuery = graphql`
  query productQuery {
    header: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/header.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
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
          }
        }
      }
    }
    checkboxes: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/checkboxes.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            footer
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
    form: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/form.md/" } }
    ) {
      edges {
        node {
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
    social: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/social.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            text {
              line
            }
            btn {
              text
              link
              images {
                normal {
                  relativePath
                }
                inverse {
                  relativePath
                }
              }
            }
            hashtag {
              link
              alt
              image {
                relativePath
              }
            }
          }
        }
      }
    }
    credits: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/credits.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            authorsText
            authors {
              name
              link
            }
            partnersText
            partners {
              name
              link
            }
          }
          html
        }
      }
    }
  }
`;
