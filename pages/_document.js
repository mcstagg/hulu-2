import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix="http://ogp.me/ns#">
      <Head>
        <meta name="image" property="og:image" content="%PUBLIC_URL%/hulu.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}