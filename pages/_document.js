import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <meta name="image" property="og:image" content="https://image.shutterstock.com/image-photo/calgary-alberta-canada-june-1-600w-1746746024.jpg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}