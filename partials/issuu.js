import React from 'react';

export default class Index extends React.Component {
  loadScript(url, callback){
    if (typeof document != "undefined"){ 
      var script = document.createElement("script")
      script.type = "text/javascript";

      if (script.readyState){  //IE
          script.onreadystatechange = function(){
              if (script.readyState == "loaded" ||
                      script.readyState == "complete"){
                  script.onreadystatechange = null;
                  callback();
              }
          };
      } else {  //Others
          script.onload = function(){
              callback();
          };
      }

      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    }
  }
  componentDidMount (){
    this.loadScript("//e.issuu.com/embed.js", ()=>{})
  }
  render () {
      return <div data-configid="1201948/38154588" className="viewer__issuuembed issuuembed"></div>
      ;
  }
};