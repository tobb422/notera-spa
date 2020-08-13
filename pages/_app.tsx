import React, { FC } from 'react';
import App, { AppContext } from 'next/app';

// contexts
import { AuthContext } from 'contexts/auth';

// ISSUE: https://github.com/vercel/styled-jsx/issues/560
// eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment,no-underscore-dangle
const _JSXStyle = require('styled-jsx/style').default;
if (typeof global !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Object.assign(global, { _JSXStyle });
}

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type FCX<P = {}> = FC<P & { className?: string }>;
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
    const { Component, pageProps } = this.props;

    return (
      <AuthContext service={'firebase'}>
        <Component {...pageProps} />
      </AuthContext>
    );
  }
}

export default MyApp;
