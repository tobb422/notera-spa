import React, { FC } from 'react';

export const Margin: FC<{
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}> = ({ children, top, right, left, bottom }) => {
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin-top: ${top || '0px'};
          margin-right: ${right || '0px'};
          margin-left: ${left || '0px'};
          margin-bottom: ${bottom || '0px'};
        }
      `}</style>
    </>
  );
};
