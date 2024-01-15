import styled from 'styled-components';
import FlipCard from '../card/FlipCard';
import { CATEGORY_DATA } from './data';

const StyledCategoryCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
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
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
`;

export default function FlipCategoryCard({ name, color }) {
  return (
    <FlipCard
      frontComponent={
        <StyledCategoryCard color={color}>
          {CATEGORY_DATA[name]['logo']}
          <div>{name}</div>
        </StyledCategoryCard>
      }
      backComponent={
        <StyledCategoryCard color={color}>
          <div>it is back</div>
        </StyledCategoryCard>
      }
      style={{ width: '300px' }}
    />
  );
}
