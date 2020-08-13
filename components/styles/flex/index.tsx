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

export const FlexColumnStart: FC = ({ children }) => {
  return (
    <>
      <div className="flex-column">{children}</div>
      <style jsx>{`
        .flex-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
      `}</style>
    </>
  );
};

export const FlexRow: FC = ({ children }) => {
  return (
    <>
      <div className="flex-row">{children}</div>
      <style jsx>{`
        .flex-row {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
};
