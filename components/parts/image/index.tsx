import React from 'react';

export const Image = ({
  src,
  alt,
  size,
  circle,
}: {
  src: string;
  alt: string;
  size: string;
  circle?: boolean;
}) => {
  return (
    <>
      <img src={src} alt={alt} />
      <style jsx>{`
        img {
          height: ${size};
          width: ${size};
          vertical-align: middle;
          border-radius: ${circle ? '50%' : 0};
        }
      `}</style>
    </>
  );
};
