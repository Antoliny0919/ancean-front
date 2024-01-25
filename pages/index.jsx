import React, { useEffect, useRef } from 'react';
import { server } from '@/api/client';
import SectionContainer from '@/components/home/container/SectionContainer';
import Bannermain from '@/components/home/BannerMain';
import PopularWriting from '@/components/home/PopularWriting';
import TopCategories from '@/components/home/TopCategories';
import LatestPosts from '@/components/home/LatestPosts';

export default function Home({ representativeCategory, posts }) {
  // Reference required for each section for scroll events
  const AboutMeRef = useRef(null);
  const PopularWritingRef = useRef(null);
  const TopCategoriesRef = useRef(null);
  const LatestPostsRef = useRef(null);

  const sections = [
    {
      name: 'About Me',
      color: 'rgb(100, 184, 201)',
      background: 'rgba(100, 184, 201, 0.3)',
      waveOption: {
        height: 5,
        amplitude: 10,
        speed: 0.3,
        points: 2,
      },
      ref: AboutMeRef,
    },
    {
      name: 'Popular Writing',
      color: 'rgb(90, 140, 211)',
      background: 'rgba(90, 140, 211, 0.3)',
      waveOption: {
        height: 15,
        amplitude: 3,
        speed: 0.5,
        points: 2,
      },
      ref: PopularWritingRef,
    },
    {
      name: 'Top Categories',
      color: 'rgb(19, 181, 185)',
      background: 'rgba(19, 181, 185, 0.3)',
      waveOption: {
        height: 7,
        amplitude: 5,
        speed: 0.3,
        points: 2,
      },
      ref: TopCategoriesRef,
    },
    {
      name: 'Latest Posts',
      color: 'rgb(106, 111, 200)',
      background: 'rgba(106, 111, 200, 0.3)',
      waveOption: {
        height: 20,
        amplitude: 1,
        speed: 0.8,
        points: 2,
      },
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

export const getStaticProps = async () => {
  const queries = {
    popularWriting: 'ordering=-wave&limit=10',
    latestPosts: 'ordering=-created_at&limit=3',
  };

  let posts = {};

  for (const [section, query] of Object.entries(queries)) {
    const response = await server.get(`/api/posts/?${query}`);
    const { results } = response.data;
    posts = { ...posts, [section]: results };
  }

  const response = await server.get(
    `/api/category/?ordering=-post_count&limit=7`,
  );
  const data = await response.data;
  const representativeCategory = data.results;

  return { props: { representativeCategory, posts } };
};
