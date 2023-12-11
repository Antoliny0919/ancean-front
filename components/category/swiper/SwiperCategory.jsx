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
  border-radius: 10px;
  color: white;
  background: ${(props) => props.color};
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
