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
      debounce(this.handleScroll, 25, { leading: true, trailing: true })
    );
  }

  handleScroll = e => {
    // console.log('handling');
    let scrollY = window.scrollY;

    this.setState({
      scroll: {
        resizeHeader: scrollY > 0,
        showNav: scrollY > 800,
        transitionCheckboxes: scrollY > 400
      }
    });
  };

  toggleProducts = (product, sticky, e) => {
    let count = this.countSelectedProducts();

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

  selectedProducts = () => {
    return this.state.products.filter(product => {
      return product.node.frontmatter.checkbox.visible;
    });
  };

  countSelectedProducts = () => {
    return this.state.products.reduce((acc, p) => {
      p.node.frontmatter.checkbox.visible && acc++;
      return acc;
    }, 0);
  };

  showScroll = () => {
    let count = this.state.products.reduce((acc, product) => {
      acc = product.node.frontmatter.checkbox.visible ? acc + 1 : acc;
      return acc;
    }, 0);
    return count;
  };

  render() {
    let header = this.props.data.header.edges[0].node.frontmatter;
    let checkboxes = this.props.data.checkboxes.edges[0].node.frontmatter;
    let products = this.state.products;
    let form = this.props.data.form.edges[0].node.frontmatter;
    let social = this.props.data.social.edges[0].node.frontmatter;
    let credits = this.props.data.credits.edges[0].node.frontmatter;
    return (
      <div className="layout__page-container">
        <header
          data-size={this.state.scroll.resizeHeader ? 'small' : 'large'}
          className="layout__header-container"
        >
          <div className="layout__header">
            <div className="header__section">
              <pre>
                <h1 className="header__title">{header.siteTitle}</h1>
              </pre>
            </div>
            <img className="header__line" src={line} role="presentation" />
            <img className="header__line-hz" src={lineHz} role="presentation" />
            <div className="header__section">
              <pre>
                <h3 className="header__subtitle">{header.subTitle.large}</h3>
              </pre>
              <div className="header__contact">{header.contact.title}</div>
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
                {products.map((product, key) => {
                  return (
                    <Checkbox
                      key={key}
                      product={product.node.frontmatter}
                      toggleProducts={this.toggleProducts}
                      disabled={
                        this.countSelectedProducts() > 2 &&
                        !product.node.frontmatter.order
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="layout__navbar-container">
            <div className="layout__navbar">
              {/* <AnimationGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={0}
              className="layout__navbar"
            > */}
              {!this.state.scroll.showNav && (
                <Button className="btn" type="point" text={checkboxes.footer} />
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
              {/* </AnimationGroup> */}
            </div>
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
                    <Img
                      sizes={
                        !diapositive
                          ? frontmatter.images.default.childImageSharp.sizes
                          : frontmatter.images.diapositive.childImageSharp.sizes
                      }
                    />
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
              <p className="social__text">{social.text[0]}</p>
              <p className="social__text">{social.text[1]}</p>
            </div>
            <div className="btn__container">
              {social.btn.map((btn, key) => {
                return <Button {...btn} type="image" />;
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
                  return (
                    <a
                      target="_blank"
                      key={key}
                      rel="noopener noreferrer"
                      href={author.link}
                    >
                      {author.name}
                      {', '}
                    </a>
                  );
                })}
                {credits.partnersText}
                {credits.partners.map((partner, key) => {
                  return (
                    <a
                      target="_blank"
                      key={key}
                      rel="noopener noreferrer"
                      href={partner.link}
                    >
                      {partner.name}
                      {key === credits.partners.length - 1 ? '. ' : ', '}
                    </a>
                  );
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
            siteTitle
            subTitle {
              large
              small
            }
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
            text
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
