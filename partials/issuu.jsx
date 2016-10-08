import React from 'react'

export default class Index extends React.Component {
  componentDidMount () {
    this.loadScript('//e.issuu.com/embed.js', () => {})
  }

  loadScript (url, callback) {
    if (typeof document !== undefined) {
      const script = document.createElement('script')
      script.type = 'text/javascript'

      if (script.readyState) {
        script.onreadystatechange = () => {
          if (script.readyState === 'loaded' || script.readyState === 'complete') {
            script.onreadystatechange = null
            callback()
          }
        }
      } else {
        script.onload = () => {
          callback()
        }
      }

      script.src = url
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }

  render () {
    return (
      <div data-configid="1201948/38154588" className="viewer__issuuembed issuuembed" />
) }
}
