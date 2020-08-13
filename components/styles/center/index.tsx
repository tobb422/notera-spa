import React, { FC } from 'react';

export const Center: FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{' div { text-align: center }'}</style>
    </>
  );
};
