import React from 'react';
import { HeadTag } from 'parts/head-tag';

function Home() {
  return (
    <>
      <HeadTag />
      <div>
        <h1>Welcome to Next.js!</h1>
        <style jsx>{`
          h1 {
            color: red;
          }
        `}</style>
      </div>
    </>
  );
}

export default Home;
