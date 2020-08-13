import React, { FC } from 'react';
import css from 'styled-jsx/css';

import { Padding } from 'styles/padding';
import { Margin } from 'styles/margin';

import { Icon } from './icon';
import { Menu } from './menu';
import { UserCard } from './user-card';

const styles = css`
  .wrapper {
    display: grid;
    grid-template-columns: 240px auto;
  }
  .side-menu {
    width: 100%;
    height: 100vh;
    background-color: #17264d;

    position: relative;
  }
  .user-card {
    position: absolute;
    bottom: 48px;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);

    width: 180px;
  }
`;

export const DefaultLayout: FC = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="side-menu">
        <Padding top="32px" bottom="64px">
          <Icon />
        </Padding>
        <Margin left="48px">
          <Menu />
        </Margin>
        <div className="user-card">
          <UserCard />
        </div>
      </div>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
};
