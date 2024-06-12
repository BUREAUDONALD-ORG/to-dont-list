import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../Button";

function IYDSocial() {
  let social = useStaticQuery(IYDSocialQuery).social.edges[0].node;

  return (
    <>
      <div
        className="layout__IYDsocial-container"
        style={{ "--selection-color": "var(--white)" }}
      >
        <div className="layout__IYDsocial">
          <div className="IYDsocial-left">
            <h1 className="IYDsocial__title">
              {social.frontmatter.headers[0]}
            </h1>
            <div
              className="markdown"
              data-font-family="roc-grotesk-compressed"
              dangerouslySetInnerHTML={{
                __html: social.html,
              }}
            />
          </div>

          <div className="IYDsocial-right">
            <h1 className="IYDsocial__title">
              {social.frontmatter.headers[1]}
            </h1>
            {social.frontmatter.btn.map((btn, key) => {
              return <Button {...btn} key={key} type="image" />;
            })}
          </div>
        </div>
      </div>
      <div className="layout__line-container" />
    </>
  );
}

const IYDSocialQuery = graphql`
  query IYDSocialQuery {
    social: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/if-you-dont/social-block.md/"
        }
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            headers
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
          }
        }
      }
    }
  }
`;

export default IYDSocial;
