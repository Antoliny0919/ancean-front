import NavbarMain from '@/components/home/NavbarMain';
import Bannermain from '@/components/home/BannerMain';
import MostBigWavePost from '@/components/home/MostBigWavePost';
import MostRepresentativeCategory from '@/components/home/MostRepresentativeCategory';

export default function Home() {
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
