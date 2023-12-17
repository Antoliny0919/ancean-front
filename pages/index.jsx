import client from '@/api/client';
import React, { useEffect, useRef } from 'react';
// import NavbarMain from '@/components/home/NavbarMain';
import SectionContainer from '@/components/home/container/SectionContainer';
import Bannermain from '@/components/home/BannerMain';
import PopularWriting from '@/components/home/PopularWriting';
import TopCategories from '@/components/home/TopCategories';
import LatestPosts from '@/components/home/LatestPosts';
// import BestPostByCategory from '@/components/home/BestPostByCategory';

export default function Home({
  representativeCategory,
  // bestPostByCategory,
  posts,
}) {
  const PopularWritingRef = useRef(null);
  const TopCategoriesRef = useRef(null);
  const LatestPostsRef = useRef(null);

  const sections = [
    {
      name: 'Popular Writing',
      color: 'hsl(215, 58%, 59%)',
      shadow: '#2b5ca1',
      hoverShadow: 'hsl(215, 58%, 70%)',
      ref: PopularWritingRef,
    },
    {
      name: 'Top Categories',
      color: 'hsl(181, 81%, 40%)',
      shadow: 'hsl(181, 81%, 25%)',
      hoverShadow: 'hsl(181, 81%, 60%)',
      ref: TopCategoriesRef,
    },
    {
      name: 'Latest Posts',
      color: 'hsl(237, 46%, 60%)',
      shadow: 'hsl(237, 46%, 40%)',
      hoverShadow: 'hsl(237, 46%, 70%)',
      ref: LatestPostsRef,
    },
  ];

  useEffect(() => {
    let div = document.querySelectorAll('.fade-in-slide-down-suspend');
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
        <Bannermain sections={sections} />
        <SectionContainer ref={PopularWritingRef}>
          <PopularWriting posts={posts.popularWriting} />
        </SectionContainer>
        <SectionContainer ref={TopCategoriesRef}>
          <TopCategories categories={representativeCategory} />
        </SectionContainer>
        <SectionContainer ref={LatestPostsRef}>
          <LatestPosts posts={posts.latestPosts} />
        </SectionContainer>
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
