import Link from 'next/link';
import styled, { css } from 'styled-components';
import FlipCard from '../card/FlipCard';
import { CATEGORY_DATA } from './data';

const StyledCategoryCard = styled.div`
  width: 100%;
  height: 100%;
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
  ${(props) =>
    props.back &&
    css`
      & > * {
        margin-bottom: 10px;
        color: ${(props) => props.color};
      }
      button {
        border: none;
        font-size: 16px;
        padding: 10px 20px;
        border-radius: 10px;
        color: ${(props) => props.color};
        background: ${(props) => props.$buttonBackground};
        border: solid ${(props) => props.color} 2px;
        transition:
          color 0.7s,
          background 0.7s;
      }
      button:hover {
        cursor: pointer;
        color: white;
        background: ${(props) => props.color};
      }
    `}
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

export default function FlipCategoryCard({ name, postCount, props = {} }) {
  return (
    <FlipCard
      frontComponent={
        <StyledCategoryCard $backgroundColor={CATEGORY_DATA[name]['color']}>
          {CATEGORY_DATA[name]['logo']}
          <div>{name}</div>
        </StyledCategoryCard>
      }
      backComponent={
        <StyledCategoryCard
          back={true}
          color={CATEGORY_DATA[name]['color']}
          $buttonBackground={CATEGORY_DATA[name]['transparentColor']}
        >
          <div>{name}</div>
          <div>{postCount}개의 포스트</div>
          <Link href={`/category/${name.toLowerCase()}`}>
            <button>GO CATEGORY</button>
          </Link>
        </StyledCategoryCard>
      }
      style={{ width: '300px' }}
      props={props}
    />
  );
}
