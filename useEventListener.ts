import { useEffect } from 'react';

export const useEventListener = <T = any>(
  key: string,
  func: (value: CustomEventInit<T>) => void
) => {
  useEffect(() => {
    window.addEventListener(key, func);
    return () => {
      window.removeEventListener(key, func);
    };
  }, []);
};
