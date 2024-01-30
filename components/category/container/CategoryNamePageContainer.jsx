import { useState, useRef, useEffect } from 'react';
import { client } from '../../../api/client';
import { CATEGORY_DATA } from '../data';
import CategoryNamePage from '../page/CategoryNamePage';

export default function CategoryNamePageContainer({ posts, name, nextPost }) {
  const [categoryPosts, setCategoryPosts] = useState(posts);

  const [nextPosts, setNextPosts] = useState(nextPost);

  const target = useRef(null);

  const { color, textShadow, transparentColor } =
    CATEGORY_DATA[name.toUpperCase()];

  const readMorePosts = async () => {
    const response = await client.get(nextPosts);
    const posts = response.data;
    return posts;
  };

  const sortPosts = async (sortField) => {
    const response = await client.get(
      `/api/posts/?category__name=${name}&limit=3&ordering=${sortField}&is_finish=true`,
    );
    const { next, results } = response.data;
    setCategoryPosts([...results]);
    setNextPosts(next);
  };

  useEffect(() => {
    const lastPostObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            let { next, results } = await readMorePosts();
            setNextPosts(next);
            setCategoryPosts([...categoryPosts, ...results]);
            observer.unobserve(target.current);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );
    nextPosts && lastPostObserver.observe(target.current);
  }, [categoryPosts, nextPosts]);

  return (
    <CategoryNamePage
      categoryPosts={categoryPosts}
      target={target}
      categoryName={name.toUpperCase()}
      bodyProps={{
        color: color,
        $transparentColor: transparentColor,
        $boxShadow: textShadow,
      }}
      sortPosts={sortPosts}
    />
  );
}
