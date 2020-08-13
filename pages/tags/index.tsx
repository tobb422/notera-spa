import React from 'react';

import { HeadTag } from 'parts/head-tag';
import { DefaultLayout } from 'layouts/default';

const Index = () => {
  return (
    <>
      <HeadTag title="tags" />
      <DefaultLayout>
        <h1>tags</h1>
      </DefaultLayout>
    </>
  );
};

export default Index;
