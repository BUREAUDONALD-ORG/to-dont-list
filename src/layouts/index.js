import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/app.scss';

class Layout extends React.Component {
  render() {
    let siteData = this.props.data.site.edges[0].node.frontmatter;
    return (
      <div className="layout__wrapper">
        <Helmet
          title={siteData.headTitle}
          meta={[
            {
              name: 'keywords',
              content: siteData.headTags
                .map(tag => {
                  return tag.tagName;
                })
                .join(', ')
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
    site: allMarkdownRemark(
      filter: { id: { regex: "//content/frontpage/site/algemeen.md/" } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            description
            headTitle
            headTags {
              tagName
            }
            siteTitle

            creditsTitle
          }
        }
      }
    }
  }
`;

export default Layout;
