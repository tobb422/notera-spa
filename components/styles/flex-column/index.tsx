import React, { FC } from 'react';

export const FlexColumn: FC = ({ children }) => {
  return (
    <>
      <div className="flex-column">{children}</div>
      <style jsx>{`
        .flex-column {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};
