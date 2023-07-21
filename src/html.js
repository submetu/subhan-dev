import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() { try { var mode = JSON.parse(localStorage.getItem('subhan:darkMode') || "false");var
  supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  === true; if (!mode && supportDarkMode){
    document.getElementsByTagName( 'html' )[0].setAttribute( 'class', 'dark' );
    localStorage.setItem('subhan:darkMode','true');
    globalThis.hideDarkModeSwitcher = true;
   }else{
    document.getElementsByTagName( 'html' )[0].setAttribute( 'class', mode ? 'dark' : '' );
   }
    } catch (e) {} })();`,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
