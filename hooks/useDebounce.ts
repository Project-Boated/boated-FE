import { useState, useEffect } from 'react';

const useDebounce = <T,>(value: T, delay: number): [boolean, T] => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return [debouncedValue !== value, debouncedValue];
};

export default useDebounce;
