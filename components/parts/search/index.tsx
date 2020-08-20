import React, { useState } from 'react';
import css from 'styled-jsx/css';

const styles = css`
  .input {
    width: 480px;
  }
  .button {
    width: 96px;
  }
`;

import { Image } from 'parts/image';
import { Input } from 'parts/input';
import { Button } from 'parts/button';
import { FlexRow } from 'styles/flex';
import { Margin } from 'styles/margin';

export const Search = () => {
  const [url, setUrl] = useState('');
  const inputUrl = (value: string) => {
    setUrl(value);
  };

  return (
    <>
      <div className="container">
        <FlexRow>
          <Image src="images/search.png" alt="search" size="24px" />
          <Margin right="16px" left="16px">
            <div className="input">
              <Input
                id="input"
                inputType="text"
                placeholder="http://localhost:3000"
                value={url}
                changeCallBack={inputUrl}
                errors={[]}
              />
            </div>
          </Margin>
          <div className="button">
            <Button val="Search" callback={() => {}} />
          </div>
        </FlexRow>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
