import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/app.scss';
//
// title: the optimal title length is around 50 characters, your title length is 86 characters
// meta description: the optimal meta description length is around 50 characters, your meta description length is 179 characters
// og:title was not found. Example: <meta property="og:title" content="Rich Link Preview" />
// og:description was not found. Example: <meta property="og:description" content="Also want these pretty website previews?" />
// og:image was not found. Example: <meta property="og:image" content="https://richpreview.com/richpreview.png" />
// favicon is OK

class Layout extends React.Component {
  render() {
    let head = this.props.data.head.edges[0].node.frontmatter;
    return (
      <div className="layout__wrapper">
        <Helmet
          title={head.title}
          meta={[
            {
              name: 'keywords',
              content: head.tags
                .map(tag => {
                  return tag.tagName;
                })
                .join(', ')
            },
            {
              name: 'description',
              content: head.description
            },
            {
              name: 'og:title',
              content: head.title
            },
            {
              name: 'og:image',
              content: head.openGraphImage.relativePath
            },
            {
              name: 'og:description',
              content: head.description
            }
          ]}
          link={[
            {
              rel: 'icon',
              type: 'image/png',
              href: 'img/favicon.png'
            }
          ]}
        />
        <div className="layout__app">{this.props.children()}</div>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.func
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
