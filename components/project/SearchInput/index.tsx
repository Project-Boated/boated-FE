import React from 'react';

import Icon from '@/components/atoms/Icon';

import { Wrapper, StyledInput } from './style';

export interface SearchInputProps {
  placeholder?: string;
  searchTarget: string;
  setSearchTarget: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput = ({ placeholder, searchTarget, setSearchTarget }: SearchInputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTarget(e.target.value);

  return (
    <Wrapper>
      <Icon icon="Search" width={10} height={10} />
      <StyledInput
        type="search"
        id="q"
        name="q"
        width={92}
        height={13}
        value={searchTarget}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default SearchInput;
