import NavbarMain from '@/components/home/NavbarMain';
import Bannermain from '@/components/home/BannerMain';
import JoinSectionMain from '@/components/home/JoinSectionMain';
// import SwiperCategoryMain from '@/components/category/swiper/SwiperCategoryMain';

export default function Home() {
  return (
    <>
      <header>
        <NavbarMain />
      </header>
      <main>
        <Bannermain />
        <JoinSectionMain />
        {/* <SwiperCategoryMain /> */}
      </main>
    </>
  );
}
