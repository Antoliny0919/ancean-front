import { useEffect, useRef } from 'react';
import NavbarMain from '@/components/home/NavbarMain';
import Bannermain from '@/components/home/BannerMain';
import MostBigWavePost from '@/components/home/MostBigWavePost';
import MostRepresentativeCategory from '@/components/home/MostRepresentativeCategory';

export default function Home() {
  const target = useRef(null);

  useEffect(() => {
    if (target) {
      let observer = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            console.log(e, 'in');
            target.current.style.opacity = '1';
          } else {
            target.current.style.opacity = '0';
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(target.current);
    }
  }, [target]);

  return (
    <>
      <header>
        <NavbarMain />
      </header>
      <main>
        <Bannermain />
        <MostBigWavePost reference={target} />
        <MostRepresentativeCategory />
      </main>
    </>
  );
}
