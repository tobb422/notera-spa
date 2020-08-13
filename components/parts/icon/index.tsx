import React from 'react';

export const Icon = ({ height }: { height?: string }) => {
  return (
    <>
      <img src="/images/logo_g.png" alt="logo" />
      <style jsx>{`
        img {
          height: ${height ? height : '48px'};
        }
      `}</style>
    </>
  );
};
