import React, { FC } from 'react';

export const Padding: FC<{
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
          padding-top: ${top || '0px'};
          padding-right: ${right || '0px'};
          padding-left: ${left || '0px'};
          padding-bottom: ${bottom || '0px'};
        }
      `}</style>
    </>
  );
};
