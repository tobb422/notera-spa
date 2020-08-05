import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <style>{`body { margin: 0 } /* custom!*/`}</style>
      </Head>
      <body className="custom_class">
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
