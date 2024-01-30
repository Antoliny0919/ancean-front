import { useState, useRef, useEffect } from 'react';
import { client } from '../../../api/client';
import PostIndex from '../PostIndex';

export default function PostIndexContainer({ posts, nextPost }) {
  const [currentPosts, setCurrentPosts] = useState(posts);

  const [nextPosts, setNextPosts] = useState(nextPost);

  const target = useRef(null);

  const readMorePosts = async () => {
    const response = await client.get(nextPosts);
    const posts = response.data;
    return posts;
  };

  const sortPosts = async (sortField) => {
    const response = await client.get(
      `/api/posts/?limit=3&ordering=${sortField}&is_finish=true`,
    );
    const { next, results } = response.data;
    setCurrentPosts([...results]);
    setNextPosts(next);
  };

  useEffect(() => {
    const lastPostObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            let { next, results } = await readMorePosts();
            setNextPosts(next);
            setCurrentPosts([...currentPosts, ...results]);
            observer.unobserve(target.current);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
    nextPosts && lastPostObserver.observe(target.current);
  }, [currentPosts, nextPosts]);

  return (
    <PostIndex
      posts={currentPosts}
      target={target}
      sortPosts={sortPosts}
    ></PostIndex>
  );
}
