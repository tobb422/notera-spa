import React from 'react';
import css from 'styled-jsx/css';

const styles = css``;

import { Image } from 'parts/image';
import { FlexRow } from 'styles/flex';

export const TagFilter = () => {
  return (
    <>
      <div className="container">
        <FlexRow>
          <Image src="images/filter.png" alt="search" size="16px" />
        </FlexRow>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
