import React from 'react';

// import site from '../content/site.md'

export default class Credits extends React.Component {
  render() {
    let site = this.props.data;
    return (
      <div id="credits" className="layout__credits">
        <div className="credits">
          <h1 className="credits__title">{site.frontmatter.creditsTitle}</h1>
          <div
            className="credits__text"
            dangerouslySetInnerHTML={{ __html: site.html }}
          />
        </div>
      </div>
    );
  }
}
