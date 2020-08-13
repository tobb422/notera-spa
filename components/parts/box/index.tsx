import React, { FC } from 'react';
import { FlexColumn } from 'styles/flex-column';

export const Box: FC = ({ children }) => {
  return (
    <>
      <div>
        <FlexColumn>{children}</FlexColumn>
      </div>
      <style jsx>{`
        div {
          width: 560px;
          padding: 32px;
          border: 1px solid #ccc;
          border-radius: 6px;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};
