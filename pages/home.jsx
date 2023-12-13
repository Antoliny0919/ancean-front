import client from '@/api/client';
import React, { useEffect } from 'react';
// import NavbarMain from '@/components/home/NavbarMain';
// import Bannermain from '@/components/home/BannerMain';
import PopularWriting from '@/components/home/PopularWriting';
import TopCategories from '@/components/home/TopCategories';
import LatestPosts from '@/components/home/LatestPosts';
// import BestPostByCategory from '@/components/home/BestPostByCategory';

export default function Home({
  representativeCategory,
  // bestPostByCategory,
  posts,
}) {
  useEffect(() => {
    let div = document.querySelectorAll('.fade-in-slide-down-suspend');
    console.log(div);
    let observer = new IntersectionObserver(
      (e) => {
        e.forEach((item) => {
          if (item.isIntersecting) {
            item.target.style.opacity = '1';
            item.target.style.transform = 'translateY(0px)';
          }
        });
      },
      { threshold: 0 },
    );
    div.forEach((item) => {
      observer.observe(item);
    });
  });

  return (
    <>
      <header>{/* <NavbarMain /> */}</header>
      <main>
        {/* <Bannermain /> */}
        <PopularWriting posts={posts.popularWriting} />
        <TopCategories categories={representativeCategory} />
        <LatestPosts posts={posts.latestPosts} />
        {/* <BestPostByCategory
          categories={representativeCategory}
          posts={bestPostByCategory}
        /> */}
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  // get user posts

  const queries = {
    popularWriting: 'ordering=-wave',
    latestPosts: 'ordering=-created_at',
  };

  let posts = {};

  for (const [section, query] of Object.entries(queries)) {
    const response = await client.get(
      `http://api-local:8000/api/posts/?${query}`,
    );
    const data = response.data;
    // only get 10posts
    posts = { ...posts, [section]: data.slice(0, 10) };
  }

  const response = await client.get(`http://api-local:8000/api/category`);
  const data = await response.data;
  const representativeCategory = data.slice(0, 7);

  let bestPostByCategory = {};

  for (const category of representativeCategory) {
    const response = await client.get(
      `http://api-local:8000/api/category/${category.name}/posts`,
    );
    const data = await response.data;
    bestPostByCategory = {
      ...bestPostByCategory,
      [category.name]: data.slice(0, 5),
    };
  }

  return { props: { representativeCategory, bestPostByCategory, posts } };
};
