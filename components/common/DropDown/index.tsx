import React, { useState, useRef } from 'react';

import useDetectOutsideClick from '@/hooks/useDetectOutside';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import { DropDownSize } from '@/types/size';

import { Wrapper, DefaultTitleWrapper, RefWrapper, SelectListWrapper, SelectItemWrapper } from './style';

export interface DropDownProps extends DropDownSize {
  defaultTitle: string;
  selectList: Array<string>;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const DropDown = ({ type, defaultTitle, selectList, selectedItem, setSelectedItem }: DropDownProps) => {
  const selectListRef = useRef<HTMLUListElement>(null);
  const [isShowList, setIsShowList] = useDetectOutsideClick(selectListRef);

  const onClickDropDown = () => {
    setIsShowList((prev: boolean) => !prev);
  };

  const onClickListItem = (e: React.MouseEvent<HTMLLIElement>) => {
    if (e.currentTarget.textContent) {
      setSelectedItem(e.currentTarget.textContent);
    }
    setIsShowList((prev: boolean) => !prev);
  };

  return (
    <Wrapper>
      <DefaultTitleWrapper type={type} onClick={onClickDropDown}>
        <div className="default-title-container">
          <Text fontSize={14}>{selectedItem || defaultTitle}</Text>
          <Icon icon="Arrow" />
        </div>
      </DefaultTitleWrapper>
      {isShowList && (
        <RefWrapper>
          <SelectListWrapper ref={selectListRef} type={type}>
            {selectList.map((item, idx) => (
              <SelectItemWrapper key={idx} isSelected={item === selectedItem} onClick={onClickListItem}>
                {item}
              </SelectItemWrapper>
            ))}
          </SelectListWrapper>
        </RefWrapper>
      )}
    </Wrapper>
  );
};

export default DropDown;
