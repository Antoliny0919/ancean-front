import { useSwiper } from 'swiper/react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

export default function SwiperButton({ type }) {
  const swiper = useSwiper();

  return (
    <>
      {type === 'prev' ? (
        <FaArrowLeftLong className={type} onClick={() => swiper.slidePrev()} />
      ) : (
        <FaArrowRightLong className={type} onClick={() => swiper.slideNext()} />
      )}
    </>
  );
}
