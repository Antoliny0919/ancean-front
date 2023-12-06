import React, { useEffect } from 'react';
import NavbarMain from '@/components/home/NavbarMain';
import Bannermain from '@/components/home/BannerMain';
import MostBigWavePost from '@/components/home/MostBigWavePost';
import MostRepresentativeCategory from '@/components/home/MostRepresentativeCategory';

export default function Home() {
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
      { threshold: 0.1 },
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
        <MostRepresentativeCategory />
      </main>
    </>
  );
}
