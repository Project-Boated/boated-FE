import React, { useState } from 'react';

import CreateBox from '@/components/project/CreateBox';

import { Wrapper } from '@/styles/pages/Project/style';

export interface RequiredInfoState {
  name: string;
  description: string;
  [key: string]: string;
}

export interface OptionalInfoState {
  year: string;
  month: string;
  date: string;
  type: 'AM' | 'PM';
  hour: string;
  minute: string;
}

const projectCreatePage = () => {
  const [isRight, setIsRight] = useState<boolean>(false);

  const [requiredInfo, setRequiredInfo] = useState<RequiredInfoState>({
    name: '',
    description: '',
  });

  const [optionalInfo, setOptionalInfo] = useState<OptionalInfoState>({
    year: '',
    month: '',
    date: '',
    type: 'AM',
    hour: '',
    minute: '',
  });

  return (
    <Wrapper>
      <CreateBox
        isRight={isRight}
        requiredInfo={requiredInfo}
        optionalInfo={optionalInfo}
        setIsRight={setIsRight}
        setRequiredInfo={setRequiredInfo}
        setOptionalInfo={setOptionalInfo}
      />
    </Wrapper>
  );
};

export default projectCreatePage;
