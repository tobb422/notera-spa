import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { AuthStore } from 'contexts/auth/provider';

import { Auth as PAuth } from 'parts/auth';
import { Box } from 'parts/box';
import { Icon } from 'parts/icon';
import { Margin } from 'styles/margin';
import { FlexColumn } from 'styles/flex-column';
import { LargeText, NormalText } from 'styles/text';
import { TextLink } from 'parts/text-link';

const LOG_IN_PATH = '/log-in';
const SIGN_UP_PATH = '/sign-up';
const ROOT_PATH = '/';

export const Auth = () => {
  const { isLogIn } = useContext(AuthStore);
  const router = useRouter();

  const isLogInPage = router.pathname === LOG_IN_PATH;

  const heading = isLogInPage ? 'Log In' : 'Sign Up';
  const link = isLogInPage ? SIGN_UP_PATH : LOG_IN_PATH;
  const linkDescription = isLogInPage
    ? 'Don\'t have an account? → ' // prettier-ignore
    : 'Already have an account? → ';

  useEffect(() => {
    if (isLogIn()) {
      window.location.href = ROOT_PATH;
    }
  });

  return (
    <Margin top={'48px'} bottom={'48px'} right={'auto'} left={'auto'}>
      <FlexColumn>
        <Icon />
        <Margin top={'32px'}>
          <Box>
            <Margin bottom={'32px'}>
              <LargeText bold>{heading}</LargeText>
            </Margin>
            <PAuth />
          </Box>
        </Margin>
        <Margin top={'32px'}>
          <NormalText>
            {linkDescription}
            <TextLink link={link}>click here!!</TextLink>
          </NormalText>
        </Margin>
      </FlexColumn>
    </Margin>
  );
};
