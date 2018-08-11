import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/app.scss';

import Header from '../components/Header.js';
import Form from '../components/Form.js';
import Social from '../components/Social.js';
import Credits from '../components/Credits.js';

class Layout extends React.Component {
  render() {
    let siteData = this.props.data.site.edges[0].node;
    let formData = this.props.data.form.edges[0].node.frontmatter;
    return (
      <div className="layout__wrapper">
        <Helmet title="Home | Gatsby + Netlify CMS" />
        <div className="layout__app">
          <Header data={siteData.frontmatter} />
          {this.props.children()}
          <Form data={formData} />
          <Social data={siteData.frontmatter} />
          <Credits data={siteData} />
        </div>
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
            siteTitle
            subTitle
            authorPrefix
            author
            authorLink
            tabsHeader
            hashtagLink
            creditsTitle
            socialbtn {
              text
              link
            }
            socialText
            nav {
              title
              slug
            }
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

export default Layout;
