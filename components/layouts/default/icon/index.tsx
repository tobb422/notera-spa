import React from 'react';

import { Icon as PIcon } from 'parts/icon';
import { Link } from 'parts/link';
import { Center } from 'styles/center';

export const Icon = () => {
  return (
    <Link link="/">
      <Center>
        <PIcon height="32px" />
      </Center>
    </Link>
  );
};
