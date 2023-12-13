import styled from 'styled-components';
import { CATEGORY_LOGO } from '../categoryLogo';

const StyledCategoryCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 10rem 5rem 10rem 5rem;
  font-size: 20px;
  font-family: 'Pretendard-Bold';
  color: white;
  background: ${(props) => props.color};
  border-radius: 10px;
  box-shadow:
    1px 1px 0 0 var(--shadow-outline-deep-dark),
    2px 2px 0 0 var(--shadow-outline-deep-dark),
    3px 3px 0 0 var(--shadow-outline-deep-dark),
    4px 4px 0 0 var(--shadow-outline-deep-dark),
    5px 5px 0 0 var(--shadow-outline-deep-dark),
    6px 6px 0 0 var(--shadow-outline-deep-dark);
  svg {
    margin-bottom: 1rem;
    width: 50%;
    height: 50%;
    color: white;
  }
`;

export default function SwiperCategory({ name, color }) {
  return (
    <StyledCategoryCard color={color}>
      {CATEGORY_LOGO[name]['logo']}
      <div>{name}</div>
    </StyledCategoryCard>
  );
}
