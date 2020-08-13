import React, { FC } from 'react';
import { useRouter } from 'next/router';

export const TextLink: FC<{ link: string }> = ({ children, link }) => {
  const router = useRouter();

  const toLink = () => {
    void router.push(link);
  };

  return (
    <>
      <span onClick={toLink}>{children}</span>
      <style jsx>{`
        span {
          cursor: pointer;
        }
        span:hover {
          color: #c3c3c3;
        }
      `}</style>
    </>
  );
};
