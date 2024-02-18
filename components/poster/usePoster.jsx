import { useState, useRef, useEffect } from 'react';
import { client } from '../../api/client';

export default function usePoster({ initialPoster, initialNextPoster }) {
  const [poster, setPoster] = useState(initialPoster);

  const [nextPoster, setNextPoster] = useState(initialNextPoster);

  const lastPostTarget = useRef(null);

  const readMorePoster = async () => {
    const response = await client.get(nextPoster);
    const poster = response.data;
    return poster;
  };

  const sortPoster = async (query) => {
    const response = await client.get(`/api/posts/?${query}`);
    const { next, results } = response.data;
    setPoster([...results]);
    setNextPoster(next);
  };

  useEffect(() => {
    const lastPostObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            let { next, results } = await readMorePoster();
            setNextPoster(next);
            setPoster([...poster, ...results]);
            observer.unobserve(lastPostTarget.current);
          }
        });
      },
      {
        threshold: 0.8,
      },
    );
    nextPoster && lastPostObserver.observe(lastPostTarget.current);
  }, [poster, nextPoster]);

  return [poster, lastPostTarget, sortPoster];
}
