import React from 'react';

import { HeadTag } from 'parts/head-tag';
import { DefaultLayout } from 'layouts/default';

const Index = () => {
  return (
    <>
      <HeadTag title="stocks" />
      <DefaultLayout>
        <h1>stocks</h1>
      </DefaultLayout>
    </>
  );
};

export default Index;
