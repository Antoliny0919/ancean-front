import styled from 'styled-components';

const StyledSlideButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
