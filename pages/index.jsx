import React, { useEffect, useRef, createContext } from 'react';
import { server } from '@/api/client';
import BannerMain from '@/components/home/BannerMain';
import Section from '@/components/home/Section';
import { HOME_SECTION_DATA } from '@/components/home/data';

export const SectionRefContext = createContext();

export default function Home({
  categories,
  posts: { popularWriting, latestPosts },
}) {
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

  // data for each section
  const sectionProps = {
    popularWriting: { posts: popularWriting },
    topCategories: { categories: categories },
    latestPosts: { posts: latestPosts },
  };

  useEffect(() => {
    let div = document.querySelectorAll('.fade-in-slide-down-suspend');
    let observer = new IntersectionObserver(
      (e) => {
        e.forEach((item) => {
          if (item.isIntersecting) {
            // if the components assigned the class(.fade-in-slide-down-suspend)
            // are shown on the screen, the style below applies
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
        <BannerMain />
        {Object.keys(HOME_SECTION_DATA).map((section, index) => {
          let sectionData = HOME_SECTION_DATA[section];
          return (
            <Section
              key={index}
              ref={sectionsRef[section]}
              sectionHeaderProps={sectionData.headerProps}
            >
              {sectionData.component({ ...sectionProps[section] })}
            </Section>
          );
        })}
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
  const categories = data.results;

  return { props: { categories, posts }, revalidate: 10 };
};
