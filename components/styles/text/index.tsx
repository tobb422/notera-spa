import React, { FC } from 'react';

type TextProps = { bold?: boolean };
type TextComponent = FC<TextProps>;

const Text: FC<TextProps & { size: number }> = ({ children, size, bold }) => {
  return (
    <>
      <span>{children}</span>
      <style jsx>{`
        span {
          font-size: ${size}px;
          font-weight: ${bold ? 700 : 400};
        }
      `}</style>
    </>
  );
};

export const NormalText: TextComponent = ({ children, bold }) => {
  return (
    <Text size={16} bold={bold}>
      {children}
    </Text>
  );
};

export const LargeText: TextComponent = ({ children, bold }) => {
  return (
    <Text size={24} bold={bold}>
      {children}
    </Text>
  );
};
