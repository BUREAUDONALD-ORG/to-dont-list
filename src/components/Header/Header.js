import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "gatsby";

import line from "./line.png";
import lineHz from "./line-hz.png";
import lineShort from "./line-short.png";

// simple wrapper to allow for gatsby graphql hook usage, without refactoring the class component
export default function Header({ size, fixed }) {
  const data = useStaticQuery(headerQuery);
  return <HeaderClass data={data} size={size} fixed={fixed} />;
}

class HeaderClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: { resizeHeader: false, position: 0 },
    };
  }

  scrollTriggers = () => {
    if (typeof window !== "undefined") {
      let scrollY = window.scrollY;
      let navbarElem = document.querySelector(".layout__navbar-container");
      let navbarPos = navbarElem ? navbarElem.offsetTop : 400;
      let navbarOffset = navbarPos - 130;

      return {
        header: this.state.scroll.position < 400 ? "large" : "small",
        nav: scrollY > navbarOffset,
      };
    } else {
      return {
        header: "large",
        nav: false,
      };
    }
  };

  handleScroll = (e) => {
    if (typeof window !== "undefined") {
      this.setState({
        scroll: {
          position: window.scrollY,
        },
      });
    }
  };

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleScroll);
      window.addEventListener("resize", this.handleScroll);
    }
  }

  render() {
    let header = this.props.data.header.edges[0].node.frontmatter;
    let scrollState = this.scrollTriggers();
    let headerSize = this.props.size || scrollState.header;

    return (
      <header
        data-size={headerSize}
        data-size-fixed={this.props.fixed ? "true" : "false"}
        className="layout__header-container"
        style={{ "--accent-color": header.accentColor }}
      >
        <div className="layout__header">
          <div className="header__section">
            <Link to="/">
              <h1 className="header__title">
                {headerSize === "large" ? header.title : header.titleSmall}
              </h1>
            </Link>
          </div>
          <img className="header__line" src={line} alt="" />
          <img className="header__line-short" src={lineShort} alt="" />
          <img className="header__line-hz" src={lineHz} alt="" />
          <div className="header__section">
            <h3 className="header__subtitle">
              {headerSize === "large" ? header.subTitle : header.subTitleSmall}
            </h3>
            <div className="header__meta-container">
              <h4 className="header__author">
                {header.author.prefix}
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={header.author.link}
                >
                  {header.author.name}
                </a>
              </h4>
              <h4 className="header__contact">
                <ScrollLink
                  rel="noopener noreferrer"
                  target="_blank"
                  to={header.contact.link}
                  smooth={true}
                  offset={-300}
                  duration={500}
                >
                  {header.contact.title}
                </ScrollLink>
              </h4>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const headerQuery = graphql`
  query headerQuery {
    header: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//content/general/header.md/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            titleSmall
            subTitle
            subTitleSmall
            author {
              link
              name
              prefix
            }
            contact {
              title
              link
            }
            accentColor
          }
        }
      }
    }
  }
`;
