import React, { FC } from 'react';

export const FullWidth: FC = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{'div { width: 100% }'}</style>
    </>
  );
};
