import { useSwiper } from 'swiper/react';
import styled from 'styled-components';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

const StyledSwiperButton = styled.div`
  svg {
    height: 3vw;
    width: 3vw;
    color: ${({ theme }) => theme.colors.mainColor[4]};
    transition: color 0.7s;
  }
  .prev {
    margin-left: 2rem;
  }
  .next {
    margin-right: 2rem;
  }
  &:hover {
    cursor: pointer;
    svg {
      color: ${({ theme }) => theme.colors.mainColor[8]};
    }
  }
`;

export default function SwiperButton({ type }) {
  const swiper = useSwiper();

  return (
    <StyledSwiperButton>
      {type === 'prev' ? (
        <FaArrowLeftLong className={type} onClick={() => swiper.slidePrev()} />
      ) : (
        <FaArrowRightLong className={type} onClick={() => swiper.slideNext()} />
      )}
    </StyledSwiperButton>
  );
}
