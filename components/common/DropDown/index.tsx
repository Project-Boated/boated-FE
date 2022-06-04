import React, { useEffect, useRef } from 'react';

import useDetectOutsideClick from '@/hooks/useDetectOutside';

import Icon from '@/components/atoms/Icon';
import Text from '@/components/atoms/Text';

import { DropDownSize } from '@/types/size';

import { Wrapper, DefaultTitleWrapper, RefWrapper, SelectListWrapper, SelectItemWrapper } from './style';

export interface DropDownProps extends DropDownSize {
  defaultTitle: string;
  target?: string;
  selectList: Array<string>;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<any>>;
}

interface ScrollToProps {
  containerRef: React.RefObject<HTMLUListElement>;
  itemRef: React.RefObject<HTMLLIElement>;
}

const DropDown = ({ type, defaultTitle, target, selectList, selectedItem, setSelectedItem }: DropDownProps) => {
  const selectListRef = useRef<HTMLUListElement>(null);
  const [isShowList, setIsShowList] = useDetectOutsideClick(selectListRef);

  const selectedItemRef = useRef<HTMLLIElement>(null);

  const onClickDropDown = () => {
    setIsShowList((prev: boolean) => !prev);
  };

  const isSelected = (target: string, selectedItem: string) => target === selectedItem;

  const onClickListItem = (e: React.MouseEvent<HTMLLIElement>) => {
    const { textContent } = e.currentTarget;

    if (!textContent) return;

    if (target) {
      setSelectedItem((prev: any) => ({
        ...prev,
        [target]: textContent,
      }));
    } else {
      setSelectedItem(e.currentTarget.textContent);
    }

    setIsShowList((prev: boolean) => !prev);
  };

  const scrollTo = ({ containerRef, itemRef }: ScrollToProps) => {
    if (!itemRef.current) return;

    containerRef.current?.scroll({
      top: itemRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (!isShowList) return;

    scrollTo({ containerRef: selectListRef, itemRef: selectedItemRef });
  }, [isShowList, selectedItem]);

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
              <SelectItemWrapper
                key={idx}
                ref={isSelected(item, selectedItem) ? selectedItemRef : null}
                isSelected={isSelected(item, selectedItem)}
                onClick={onClickListItem}
              >
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
