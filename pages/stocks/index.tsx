import React from 'react';
import { DefaultLayout } from 'layouts/default';
import { HeadTag } from 'parts/head-tag';
import { Stocks } from 'pages/stocks';

const Index = () => {
  return (
    <>
      <HeadTag title="stocks" />
      <DefaultLayout>
        <Stocks />
      </DefaultLayout>
    </>
  );
};

export default Index;
