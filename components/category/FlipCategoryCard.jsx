import Link from 'next/link';
import styled, { css } from 'styled-components';
import FlipCard from '../card/FlipCard';
import { CATEGORY_DATA } from './data';
import { linearGradient } from '@/styles/variable';
import CategoryButton from '../button/CategoryButton';

const StyledCategoryCard = styled.div`
  @media screen and (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  height: 70%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.back
      ? css`
          background: #484848;
        `
      : css`
          background: ${(props) => props.$backgroundColor};
        `}
  border-radius: 10px;
  font-size: 20px;
  letter-spacing: 0.5vh;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
  & > * {
    margin-bottom: 10px;
  }
  ${(props) =>
    props.back &&
    css`
      div {
        ${(props) =>
          props.color && props.color.includes('linear-gradient')
            ? css`
                ${linearGradient.text(props.color)};
              `
            : css`
                color: ${props.color};
              `}
      }
    `}
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

export default function FlipCategoryCard({ name, postCount, props = {} }) {
  const category = CATEGORY_DATA[name];

  return (
    <FlipCard
      frontComponent={
        <StyledCategoryCard $backgroundColor={category['color']}>
          {category['logo']}
          <div>{name}</div>
        </StyledCategoryCard>
      }
      backComponent={
        <StyledCategoryCard
          back={true}
          color={category['color']}
          $buttonBackground={category['transparentColor']}
        >
          <div>{name}</div>
          <div>{postCount}개의 포스트</div>
          <Link href={`/category/${name.toLowerCase()}`}>
            <CategoryButton style={{ padding: '8px 12px' }} name={name}>
              GO {name}
            </CategoryButton>
          </Link>
        </StyledCategoryCard>
      }
      style={{ width: '300px' }}
      props={props}
    />
  );
}
