import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
const ScrollLink = Link;
import slugify from 'slugify';

import '../styles/app.scss';

import Form from '../components/Form.js';

class Layout extends React.Component {
  render() {
    let siteData = this.props.data.site.edges[0].node.frontmatter;
    let formData = this.props.data.form.edges[0].node.frontmatter;
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
        <div className="layout__app">
          {this.props.children()}
          <Form data={formData} />
          <div id="social" className="layout__block-container layout__social">
            <div className="layout__block social">
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
          <div id="credits" className="layout__block-container layout__credits">
            <div className="layout__block credits">
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
            subTitle
            authorPrefix
            author
            authorLink
            hashtag {
              link
              alt
              image {
                relativePath
              }
            }
            creditsTitle
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
