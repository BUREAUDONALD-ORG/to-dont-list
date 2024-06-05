import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Button from "../Button";

function Social() {
  let social = useStaticQuery(socialQuery).social.edges[0].node.frontmatter;

  return (
    <div
      className="layout__social-container"
      style={{ "--accent-color": "#fafafa" }}
    >
      <div className="layout__social">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={social.hashtag.link}
          className="social__hashtag"
        >
          <img
            src={`/${social.hashtag.image.relativePath}`}
            alt="#ToDontList"
            className="social__hashtag"
          />
        </a>
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

const socialQuery = graphql`
  query socialQuery {
    social: allMarkdownRemark(
      filter: {
        fileAbsolutePath: {
          regex: "//content/subsites/landing-page/social-block.md/"
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
  }
`;

export default Social;
