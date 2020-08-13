import React from 'react';
import Head from 'next/head';

export const HeadTag = ({ title }: { title?: string }) => {
  return (
    <Head>
      <title>{title ? `${title} | notera` : 'notera'}</title>
    </Head>
  );
};
