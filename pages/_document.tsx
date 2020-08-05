import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/static/main.css" />
      </Head>
      <body className="custom_class">
      <Main />
      <NextScript />
      </body>
      </html>
    )
  }
}
