import { useState, useEffect, useCallback } from 'react';

export default function useModal(initialState = false) {
  const [state, setState] = useState(initialState);

  const open = useCallback((effect) => {
    setState(true);
    effect();
  }, []);

  const close = useCallback((effect) => {
    setState(false);
    effect();
  }, []);

  useEffect(() => {
    if (state) {
      document.body.style = 'overflow: hidden';
    } else {
      document.body.style = 'overflow: none';
    }
  }, [
    state,
    typeof window !== 'undefined' && window.outerWidth,
    typeof window !== 'undefined' && window.outerHeight,
  ]);

  return { state, open, close };
}
