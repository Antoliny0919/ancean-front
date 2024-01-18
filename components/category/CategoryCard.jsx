import styled from 'styled-components';
import Card from '../card/Card';
import { CATEGORY_DATA } from './data';
import { flexBox } from '../../styles/variable';

const StyledCategoryCard = styled.div`
  background: ${(props) => props.color};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  ${flexBox.flex('column')};
  color: white;
  svg {
    height: 50px;
    width: 50px;
  }
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
`;

export default function CategoryCard({ name }) {
  return (
    <Card style={{ width: '280px' }}>
      <StyledCategoryCard color={CATEGORY_DATA[name]['color']}>
        <div>{CATEGORY_DATA[name]['logo']}</div>
        <div>{name}</div>
      </StyledCategoryCard>
    </Card>
  );
}
