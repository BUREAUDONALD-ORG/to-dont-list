import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "../styles/app.scss";

class Layout extends React.Component {
  render() {
    let head = this.props.data.head.edges[0].node.frontmatter;
    return (
      <div className="layout__wrapper">
        <Helmet
          title={head.title}
          meta={[
            {
              name: "keywords",
              content: head.tags
                .map((tag) => {
                  return tag.tagName;
                })
                .join(", "),
            },
            {
              name: "description",
              content: head.description,
            },
            {
              property: "og:title",
              content: head.title,
            },
            {
              property: "og:image",
              content: head.openGraphImage.relativePath,
            },
            {
              property: "og:description",
              content: head.description,
            },
          ]}
          link={[
            {
              rel: "icon",
              type: "image/png",
              href: "img/favicon.png",
            },
          ]}
        />
        <div className="layout__app">{this.props.children()}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func,
};

export const layoutQuery = graphql`
  query layoutQuery {
    head: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/head.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags {
              tagName
            }
            description
            openGraphImage {
              relativePath
            }
          }
        }
      }
    }
  }
`;

export default Layout;
