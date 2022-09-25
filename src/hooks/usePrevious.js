import { useEffect, useRef } from 'react';

export function usePrevious(user) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = user;
  }, [user]);

  return ref.current;
}
