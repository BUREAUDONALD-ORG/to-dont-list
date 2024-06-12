import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../Button";

function IYDSocial() {
  let social = useStaticQuery(IYDSocialQuery).social.edges[0].node.frontmatter;

  return (
    <div
      className="layout__social-container"
      style={{ "--selection-color": "var(--white)" }}
    >
      <div className="layout__social">
        <div className="social__text-container">
          <p className="social__text">{social.text[0].line}</p>
          <p className="social__text">{social.text[1].line}</p>
        </div>
        <div className="btn__container">
          {social.btn.map((btn, key) => {
            return <Button {...btn} key={key} type="image" />;
          })}
          <div className="social__placeholder" />
        </div>
      </div>
    </div>
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
          }
        }
      }
    }
  }
`;

export default IYDSocial;
