import React from 'react';
import css from 'styled-jsx/css';
import { FlexRow } from 'styles/flex';
import { TagFilter } from 'parts/tag-filter';
import { Search } from 'parts/search';
import { Margin } from 'styles/margin';

const styles = css`
  .container {
    margin: 32px 48px 0;
  }

  .wrapper {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .header {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .title {
    line-height: 1;
    font-size: 32px;
    font-weight: bold;
    vertical-align: middle;
  }
`;

export const Stocks = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="header">
          <FlexRow justifyContent="space-between">
            <FlexRow>
              <div className="title">stocks</div>
              <Margin left="24px" right="48px">
                <TagFilter />
              </Margin>
            </FlexRow>
            <Search />
          </FlexRow>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};
