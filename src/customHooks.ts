import { useEffect, useState } from 'react';

export const useDebouce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounced = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(debounced);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouncedValue;
};
