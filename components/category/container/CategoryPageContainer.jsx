import { useState, useRef, useEffect } from 'react';
import client from '../../../api/client';
import { CATEGORY_LOGO } from '../categoryLogo';
import CategoryPage from '../CategoryPage';

export default function CategoryPageContainer({ posts, name, nextPost }) {
  const [categoryPosts, setCategoryPosts] = useState(posts);

  const [nextPosts, setNextPosts] = useState(nextPost);

  const target = useRef(null);

  const { color, textShadow, transparentColor } =
    CATEGORY_LOGO[name.toUpperCase()];

  const readMorePosts = async () => {
    const response = await client.get(nextPosts);
    const posts = response.data;
    console.log(posts);
    return posts;
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
    <CategoryPage
      categoryPosts={categoryPosts}
      target={target}
      headerProps={{
        color: color,
        $textShadow: textShadow,
        $categoryName: name.toUpperCase(),
      }}
      bodyProps={{
        color: color,
        $transparentColor: transparentColor,
        $boxShadow: textShadow,
      }}
    />
  );
}
