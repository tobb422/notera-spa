import React from 'react'
import App, { AppContext } from 'next/app'

// ISSUE: https://github.com/vercel/styled-jsx/issues/560
const _JSXStyle = require('styled-jsx/style').default
if (typeof global !== 'undefined') {
  Object.assign(global, { _JSXStyle })
}

class MyApp extends App {
  static async getInitialProps(context: AppContext) {
    const { Component, ctx } = context

    const pageProps = !!Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return <Component {...pageProps} />
  }
}

export default MyApp

