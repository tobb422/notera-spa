import React from 'react';

import { Image } from 'parts/image';
import { Link } from 'parts/link';
import { FlexColumnStart } from 'styles/flex';
import { NormalText } from 'styles/text';
import { Margin } from 'styles/margin';
import { Space } from 'styles/space';

export const Menu = () => {
  return (
    <FlexColumnStart>
      <Margin bottom="32px">
        <Link link="/stocks">
          <Image src="images/stock.png" alt="stock" size="24px" />
          <Space />
          <NormalText color="#fff" bold>
            stocks
          </NormalText>
        </Link>
      </Margin>
      <Link link="/tags">
        <Image src="images/tag.png" alt="tag" size="24px" />
        <Space />
        <NormalText color="#fff" bold>
          tags
        </NormalText>
      </Link>
    </FlexColumnStart>
  );
};
