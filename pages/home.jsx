import NavbarMain from '@/components/home/NavbarMain';
import Bannermain from '@/components/home/BannerMain';
import SwiperCategoryMain from '@/components/category/swiper/SwiperCategoryMain';

export default function Home() {
  return (
    <>
      <header>
        <NavbarMain />
      </header>
      <main>
        <Bannermain />
        <SwiperCategoryMain />
      </main>
    </>
  );
}
