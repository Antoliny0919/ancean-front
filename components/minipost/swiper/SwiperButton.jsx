import styled from 'styled-components';
import { useSwiper } from 'swiper/react';

const StyledSwiperButton = styled.button`
  font-family: 'Pretendard-Bold';
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.colors.mainColor[8]};
  svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export default function SwiperButton({ icon, title }) {
  const swiper = useSwiper();

  return (
    <StyledSwiperButton
      onClick={
        title === 'NEXT' ? () => swiper.slideNext() : () => swiper.slidePrev()
      }
      className={title === 'NEXT' ? 'swiper-button-next' : 'swiper-button-prev'}
    >
      <div>{icon}</div>
      <div>{title}</div>
    </StyledSwiperButton>
  );
}
