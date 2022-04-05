import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta name="image" property="og:image" content="https://links.papareact.com/9xl"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}