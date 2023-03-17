import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1515388210457824"
          crossorigin="anonymous"
        >
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="notification"></div>
      </body>
    </Html>
  )
}
