import client from '@/api/client';
import React, { useEffect } from 'react';
import NavbarMain from '@/components/home/NavbarMain';
import Bannermain from '@/components/home/BannerMain';
import MostBigWavePost from '@/components/home/MostBigWavePost';
import MostRepresentativeCategory from '@/components/home/MostRepresentativeCategory';
import BestPostByCategory from '@/components/home/BestPostByCategory';

export default function Home({ representativeCategory, bestPostByCategory }) {
  useEffect(() => {
    let div = document.querySelectorAll('.fade-in-slide-down-suspend');
    console.log(div);
    let observer = new IntersectionObserver(
      (e) => {
        e.forEach((item) => {
          if (item.isIntersecting) {
            item.target.style.opacity = '1';
            item.target.style.transform = 'translateY(0px)';
          } else {
            item.target.style.opacity = '0';
            item.target.style.transform = 'translateY(-100px)';
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
      <header>
        <NavbarMain />
      </header>
      <main>
        <Bannermain />
        <MostBigWavePost />
        <MostRepresentativeCategory data={representativeCategory} />
        <BestPostByCategory
          categories={representativeCategory}
          posts={bestPostByCategory}
        />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  // get user posts
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

  return { props: { representativeCategory, bestPostByCategory } };
};
