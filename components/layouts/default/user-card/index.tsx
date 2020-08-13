import React, { useContext, useState, useEffect } from 'react';
import css from 'styled-jsx/css';

import { AuthStore } from 'contexts/auth/provider';

import { Padding } from 'styles/padding';
import { Image } from 'parts/image';
import { MediumText } from 'styles/text';
import { Space } from 'styles/space';
import { FlexRow } from 'styles/flex';

const styles = css`
  .card {
    width: 100%;
    background-color: #fff;
    border-radius: 6px;
  }
`;

export const UserCard = () => {
  const [userName, setUserName] = useState('');
  const [photoURL, setPhotoURL] = useState('images/user.png');
  const { user } = useContext(AuthStore);

  useEffect(() => {
    if (user) {
      setUserName(user.displayName || '');
      setPhotoURL(user.photoURL || 'images/user.png');
    }
  }, [user]);

  return (
    <>
      <div className="card">
        <Padding top="16px" bottom="16px" right="16px" left="16px">
          <FlexRow>
            <Image src={photoURL} alt="user" size="32px" circle />
            <Space />
            <MediumText color="#17264d" bold>
              {userName}
            </MediumText>
          </FlexRow>
        </Padding>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};
