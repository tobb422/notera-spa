import React from 'react';
import App, { AppContext } from 'next/app';

// ISSUE: https://github.com/vercel/styled-jsx/issues/560
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,no-underscore-dangle
const _JSXStyle = require('styled-jsx/style').default;
if (typeof global !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Object.assign(global, { _JSXStyle });
}

class MyApp extends App {
  static async getInitialProps(context: AppContext) {
    const { Component, ctx } = context;

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
