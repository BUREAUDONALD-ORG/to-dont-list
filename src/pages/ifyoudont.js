import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import Header from "../components/Header/Header.js";

import ToDontNav from "../components/ToDontNav/ToDontNav.js";

export default class indexPage extends React.Component {
  render() {
    let credits = this.props.data.credits.edges[0].node.frontmatter;
    return (
      <Layout>
        <div className="layout__page-container">
          <Header />

          <ToDontNav />

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
