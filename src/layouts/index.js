import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/app.scss';

import Header from '../components/Header.js';
import Form from '../components/Form.js';
import Social from '../components/Social.js';
import Credits from '../components/Credits.js';

class TemplateWrapper extends React.Component {
  componentDidMount() {
    // if (typeof document !== undefined) {
    //   const smoothScroll = require('smooth-scroll');
    //
    //   smoothScroll.init();
    // }
    // (function(i, s, o, g, r, a, m) {
    //   i['GoogleAnalyticsObject'] = r;
    //   (i[r] =
    //     i[r] ||
    //     function() {
    //       (i[r].q = i[r].q || []).push(arguments);
    //     }),
    //     (i[r].l = 1 * new Date());
    //   (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    //   a.async = 1;
    //   a.src = g;
    //   m.parentNode.insertBefore(a, m);
    // })(
    //   window,
    //   document,
    //   'script',
    //   'https://www.google-analytics.com/analytics.js',
    //   'ga'
    // );
    // ga('create', 'UA-89952488-1', 'auto');
    // ga('send', 'pageview');
  }

  render() {
    let siteData = this.props.data.site.edges[0].node;
    let formData = this.props.data.form.edges[0].node.frontmatter;
    console.log(siteData.html);
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

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export const layoutQuery = graphql`
  query defaultData {
    site: allMarkdownRemark(
      filter: { id: { regex: "//pages/frontpage/default/site.md/" } }
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
              link
            }
          }
        }
      }
    }
    form: allMarkdownRemark(
      filter: { id: { regex: "//pages/frontpage/default/form.md/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            fields
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

export default TemplateWrapper;
