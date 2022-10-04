import React from 'react';

import Link from 'next/link';

import * as Styled from './style';

export interface TabProps {
  isFocused?: boolean;
  href: string;
  children: React.ReactNode;
}

const Tab = ({ isFocused = true, href, children }: TabProps) => (
    <Styled.Wrapper isFocused={isFocused}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </Styled.Wrapper>
  );

export default Tab;
