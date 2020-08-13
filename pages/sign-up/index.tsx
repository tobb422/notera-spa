import React from 'react';
import { Auth } from 'pages/auth';
import { HeadTag } from 'parts/head-tag';

const Index = () => {
  return (
    <>
      <HeadTag title="Sign Up" />
      <Auth />
    </>
  );
};

export default Index;
