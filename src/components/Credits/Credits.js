import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Credits() {
  const credits =
    useStaticQuery(creditsQuery).credits.edges[0].node.frontmatter;

  return (
    <div
      className="layout__credits-container"
      style={{ "--accent-color": credits.accentColor }}
    >
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
  );
}

const creditsQuery = graphql`
  query creditsQuery {
    credits: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//content/general/credits.md/" } }
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
            accentColor
          }
          html
        }
      }
    }
  }
`;

export default Credits;
