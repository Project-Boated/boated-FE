import React, { useEffect, useState } from 'react';

const useDetectOutsideClick: any = (el: React.RefObject<HTMLDivElement>, initialState: boolean) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (el.current && !el.current.contains(e.target as Node)) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};

export default useDetectOutsideClick;
