import React, { useEffect, useRef, createContext } from 'react';
import { server } from '@/api/client';
import SectionContainer from '../components/home/container/SectionContainer';
import Bannermain from '@/components/home/BannerMain';
import AboutMe from '@/components/home/AboutMe';
import PopularWriting from '@/components/home/PopularWriting';
import TopCategories from '@/components/home/TopCategories';
import LatestPosts from '@/components/home/LatestPosts';

export const SectionRefContext = createContext();

export default function Home({ representativeCategory, posts }) {
  // Reference required for each section for scroll events
  const aboutMeRef = useRef(null);
  const popularWritingRef = useRef(null);
  const topCategoriesRef = useRef(null);
  const latestPostsRef = useRef(null);

  const sectionsRef = {
    aboutMe: aboutMeRef,
    popularWriting: popularWritingRef,
    topCategories: topCategoriesRef,
    latestPosts: latestPostsRef,
  };

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
    <SectionRefContext.Provider value={sectionsRef}>
      <main>
        <Bannermain />
        <SectionContainer ref={aboutMeRef}>
          <AboutMe />
        </SectionContainer>
        <SectionContainer ref={popularWritingRef}>
          <PopularWriting posts={posts.popularWriting} />
        </SectionContainer>
        <SectionContainer ref={topCategoriesRef}>
          <TopCategories categories={representativeCategory} />
        </SectionContainer>
        <SectionContainer ref={latestPostsRef}>
          <LatestPosts posts={posts.latestPosts} />
        </SectionContainer>
      </main>
    </SectionRefContext.Provider>
  );
}

export const getStaticProps = async () => {
  const queries = {
    popularWriting: 'ordering=-wave&limit=10',
    latestPosts: 'ordering=-created_at&limit=3',
  };

  let posts = {};

  for (const [section, query] of Object.entries(queries)) {
    const response = await server.get(`/api/posts/?${query}&is_finish=true`);
    const { results } = response.data;
    posts = { ...posts, [section]: results };
  }

  const response = await server.get(
    `/api/category/?ordering=-post_count&limit=7`,
  );
  const data = await response.data;
  const representativeCategory = data.results;

  return { props: { representativeCategory, posts }, revalidate: 10 };
};
