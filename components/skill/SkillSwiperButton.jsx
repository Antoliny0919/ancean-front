import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa6';
import { FaArrowLeft } from 'react-icons/fa6';
import { useSwiper } from 'swiper/react';

const StyledSwiperButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  svg {
    width: 2.5em;
    height: 2.5em;
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
  }
  &:hover&:disabled {
    cursor: default;
  }
`;

export default function SkillSwiperButton({
  direction,
  currentSlide,
  lastSlideNum,
}) {
  const swiper = useSwiper();

  console.log(lastSlideNum);

  return (
    <>
      {direction === 'previous' ? (
        <StyledSwiperButton
          onClick={() => swiper.slidePrev()}
          disabled={currentSlide === 0 && true}
        >
          <FaArrowLeft />
        </StyledSwiperButton>
      ) : (
        <StyledSwiperButton
          onClick={() => swiper.slideNext()}
          disabled={currentSlide === lastSlideNum && true}
        >
          <FaArrowRight />
        </StyledSwiperButton>
      )}
    </>
  );
}
