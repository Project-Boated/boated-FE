import React, { useState, useCallback } from 'react';

const useBoolean = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const open = useCallback(() => setIsShow(true), [setIsShow]);

  const close = useCallback(() => setIsShow(false), [setIsShow]);

  const toggle = useCallback(() => setIsShow((prev: boolean) => !prev), [setIsShow]);

  return { isShow, open, close, toggle };
};

export default useBoolean;
