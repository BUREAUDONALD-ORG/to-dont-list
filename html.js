import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import site from 'content/site.md'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={site.description} />
          <title>{title}</title>
          {/* eslint-disable max-len*/}
          <link rel="icon" type="image/png" sizes="192x192" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/android-chrome-192x192.png" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#fff" />
          <meta name="application-name" content="ToDon'tList" />
          <link rel="apple-touch-icon" sizes="57x57" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-icon-180x180.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="ToDon'tList" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="230x230" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/favicon-230x230.png" />
          <link rel="shortcut icon" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/favicon.ico" />
          <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-320x460.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-640x920.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-640x1096.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-750x1294.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-1182x2208.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-1242x2148.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-748x1024.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-768x1004.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-1496x2048.png" />
          <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" href="/icons-b7efdbe84125e7cb64fdfb9bbacb113a/apple-touch-startup-image-1536x2008.png" />
          <link rel="shortcut icon" href={this.props.favicon} />
          {/* eslint-enable */}
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
