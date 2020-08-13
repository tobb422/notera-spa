import React, { FC } from 'react';
import { useRouter } from 'next/router';

type LFC = FC<{ link: string }>;

export const TextLink: LFC = ({ children, link }) => {
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

export const Link: LFC = ({ children, link }) => {
  const router = useRouter();

  const toLink = () => {
    void router.push(link);
  };

  return (
    <>
      <div onClick={toLink}>{children}</div>
      <style jsx>{`
        div {
          cursor: pointer;
        }
        div:hover {
          opacity: 0.7;
        }
      `}</style>
    </>
  );
};
