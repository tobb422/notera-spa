import React, { FC } from 'react';

type TextProps = { bold?: boolean; color?: '#fff' | '#001f3f' | '#17264d' };
type TextComponent = FC<TextProps>;

const Text: FC<TextProps & { size: number }> = ({
  children,
  size,
  bold,
  color,
}) => {
  return (
    <>
      <span>{children}</span>
      <style jsx>{`
        span {
          font-size: ${size}px;
          font-weight: ${bold ? 700 : 400};
          color: ${color ? color : '#001f3f'};
        }
      `}</style>
    </>
  );
};

export const NormalText: TextComponent = ({ children, bold, color }) => {
  return (
    <Text size={16} bold={bold} color={color}>
      {children}
    </Text>
  );
};

export const MediumText: TextComponent = ({ children, bold, color }) => {
  return (
    <Text size={20} bold={bold} color={color}>
      {children}
    </Text>
  );
};

export const LargeText: TextComponent = ({ children, bold, color }) => {
  return (
    <Text size={24} bold={bold} color={color}>
      {children}
    </Text>
  );
};
