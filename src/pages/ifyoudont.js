import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import { Link } from "react-scroll";

import Button from "../components/Button.js";

import line from "../../static/img/line.png";
import lineHz from "../../static/img/line-hz.png";
import lineShort from "../../static/img/line-short.png";

import ctaTitle from "../../static/img/IYD_Title.svg";
import ctaImg from "../../static/img/Free_Book_Mockup_no_shadow.png";

const ScrollLink = Link;
export default class indexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: { resizeHeader: false, position: 0 },
    };
  }

  interpolatePosition = (start, end, scrollHeight) => {
    if (typeof window !== "undefined") {
      let scrollY = window.scrollY;
      let point = start - (scrollY / scrollHeight) * (start - end);
      let edge = point > end ? point : end;
      return `${edge}rem`;
    } else {
      return undefined;
    }
  };

  scrollTriggers = () => {
    let scrollY = window.scrollY;
    let navbarElem = document.querySelector(".layout__navbar-container");
    let navbarPos = navbarElem ? navbarElem.offsetTop : 400;
    let navbarOffset = navbarPos - 130;

    if (typeof window !== "undefined") {
      return {
        header: "small",
        nav: scrollY > navbarOffset,
      };
    }
  };

  handleScroll = (e) => {
    if (typeof window !== "undefined") {
      this.setState({
        scroll: {
          position: window.scrollY,
        },
      });
    }
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.handleScroll);
    }
  }

  render() {
    let header = this.props.data.header.edges[0].node.frontmatter;
    let credits = this.props.data.credits.edges[0].node.frontmatter;
    return (
      <Layout>
        <div className="layout__page-container">
          <header data-size={"small"} className="layout__header-container">
            <div className="layout__header">
              <div className="header__section">
                <h1 className="header__title">{header.titleSmall}</h1>
              </div>
              <img className="header__line" src={line} alt="" />
              <img className="header__line-short" src={lineShort} alt="" />
              <img className="header__line-hz" src={lineHz} alt="" />
              <div className="header__section">
                <h3 className="header__subtitle">{header.subTitleSmall}</h3>
                <div className="header__meta-container">
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
                </div>
              </div>
            </div>
          </header>

          <section className="layout__cta-container">
            <div className="layout__cta">
              <div className="cta__section__left">
                <img className="cta__title" src={ctaTitle} />
                <Button
                  type="large"
                  text="Go to book website"
                  link="https://www.bispublishers.com/if-you-dont.html"
                />
              </div>
              <div className="cta__section__right">
                <img className="cta__img" src={ctaImg} />
              </div>
            </div>
          </section>

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
                          {", "}
                        </span>
                      );
                    } else {
                      return (
                        <span key={key}>
                          {author.name}
                          {key === credits.authors.length - 1 ? ", " : ", "}
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
                          {key === credits.partners.length - 1 ? ". " : ", "}
                        </span>
                      );
                    } else {
                      return (
                        <span key={key}>
                          {partner.name}
                          {key === credits.partners.length - 1 ? ". " : ", "}
                        </span>
                      );
                    }
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </Layout>
    );
  }
}

export const query = graphql`
  query productQuery {
    header: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//content/frontpage/site/header.md/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            titleSmall
            subTitle
            subTitleSmall
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
      filter: {
        fileAbsolutePath: { regex: "//content/frontpage/site/checkboxes.md/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            footer
          }
        }
      }
    }
    products: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//content/frontpage/products/" } }
      sort: { order: ASC, fields: [frontmatter___id] }
    ) {
      edges {
        node {
          html
          frontmatter {
            id
            timeToRead
            checkbox {
              title
              text
              smallText
              visible
            }
            buttons {
              text
              link
            }
            images {
              default {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                }
              }
              diapositive {
                childImageSharp {
                  gatsbyImageData(
                    width: 1920
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP]
                  )
                }
              }
            }
            layout
            accentColor
          }
        }
      }
    }
    form: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "//content/frontpage/site/form.md/" }
      }
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
      filter: {
        fileAbsolutePath: { regex: "//content/frontpage/site/social.md/" }
      }
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
      filter: {
        fileAbsolutePath: { regex: "//content/frontpage/site/credits.md/" }
      }
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
