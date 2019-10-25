import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script noModule src='https://unpkg.com/ionicons@4.6.2/dist/ionicons.js' />
        </body>
      </Html>
    )
  }
}

export default MyDocument
