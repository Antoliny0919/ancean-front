import { Swiper } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function CoverflowSwiper({
  children,
  swiperProps = {
    slidesPerView: 1,
    extraModules: [],
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifies: 0.5,
      slideShadows: false,
    },
    extraProps: {},
  },
}) {
  const { slidesPerView, extraModules, coverflowEffect, extraProps } =
    swiperProps;

  return (
    <Swiper
      modules={[EffectCoverflow, ...extraModules]}
      slidesPerView={slidesPerView}
      effect={'coverflow'}
      coverflowEffect={{
        ...coverflowEffect,
      }}
      {...extraProps}
    >
      {children}
    </Swiper>
  );
}
