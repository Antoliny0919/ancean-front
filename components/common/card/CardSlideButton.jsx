import styled from 'styled-components';

const StyledSlideButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Pretendard-Bold';
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.colors.mainColor[8]};
  svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export default function CardSlideButton({ icon, title }) {
  return (
    <StyledSlideButtonArea>
      {icon}
      <div>{title}</div>
    </StyledSlideButtonArea>
  );
}
