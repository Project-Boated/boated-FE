import React, { useEffect } from 'react';

import { isNicknameDuplicated } from '@/lib/api/profile';

import useDebounce from '@/hooks/useDebounce';

import Icon from '@/components/atoms/Icon';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';

import {
  LoadingWrapper,
  NicknameInputWrapper,
  NicknameTitleWrapper,
  NicknameWarningTextWrapper,
} from '@/components/common/NicknameInput/style';

import Theme from '@/styles/Theme';


export interface NicknameInputProps {
  value: string;
  isDuplicated: boolean;
  setIsDuplicated: React.Dispatch<React.SetStateAction<boolean>>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NicknameInput = ({ value: nickname, isDuplicated, setIsDuplicated, onChange }: NicknameInputProps) => {
  const [isLoading, debounceNickname] = useDebounce<string>(nickname, 500);

  const checkNicknameDuplicated = (nickname: string) => {
    if (nickname === '') {
      return;
    }

    isNicknameDuplicated({ nickname }).then((res) => {
      if (res.data.duplicated) {
        setIsDuplicated(true);
        return;
      }
      setIsDuplicated(false);
    });
  };

  // 닉네임 중복체크 디바운스
  useEffect(() => {
    checkNicknameDuplicated(debounceNickname);
  }, [debounceNickname]);

  return (
    <NicknameInputWrapper>
      <NicknameTitleWrapper>
        <Text fontSize={14}>닉네임</Text>
      </NicknameTitleWrapper>
      <div>
        <Input
          type="text"
          id="nickname-input"
          name="nickname-input"
          width={380}
          height={40}
          value={nickname}
          onChange={onChange}
        />
        <NicknameWarningTextWrapper>
          {debounceNickname && (
            <Text fontSize={10} color={isDuplicated ? Theme.W_1 : Theme.P_2}>
              {isDuplicated ? '*이미 존재하는 닉네임이에요!' : '멋진 닉네임이에요!'}
            </Text>
          )}
        </NicknameWarningTextWrapper>
      </div>
      <LoadingWrapper>{isLoading && <Icon width={30} height={30} icon="Loading" />}</LoadingWrapper>
    </NicknameInputWrapper>
  );
};

export default NicknameInput;
