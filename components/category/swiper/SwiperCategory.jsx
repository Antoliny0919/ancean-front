import styled from 'styled-components';

const StyledCategoryCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding: 10rem 5rem 10rem 5rem;
  font-size: 20px;
  font-family: 'Pretendard-Bold';
  border: solid ${({ theme }) => theme.colors.mainColor[4]} 3px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.mainColor[8]};
  background-color: white;
  svg {
    margin-bottom: 1rem;
    width: 50%;
    height: 50%;
    color: ${({ theme }) => theme.colors.mainColor[1]};
  }
`;

export default function SwiperCategory({ logo, title, slideNum }) {
  return (
    <StyledCategoryCard slideNum={slideNum}>
      {logo}
      <div>{title}</div>
    </StyledCategoryCard>
  );
}
