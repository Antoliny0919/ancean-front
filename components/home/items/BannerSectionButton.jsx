import styled from 'styled-components';

const StyledSectionButton = styled.button`
  border-radius: 10px;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 16px;
  color: #f8f8f8;
  border: none;
  background-color: ${(props) => props.color};
  box-shadow:
    rgba(45, 35, 66, 0.4) 0 3px 5px,
    rgba(45, 35, 66, 0.3) 0 8px 12px -3px,
    ${(props) => props.shadow} 0 -3px 0 inset;
  transition:
    box-shadow 0.4s,
    transform 0.4s,
    color 0.4s,
    background-color 0.4s;
  & + & {
    margin-left: 1.3rem;
  }
  &:hover {
    cursor: pointer;
    box-shadow:
      rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 8px 12px -3px,
      ${(props) => props.$hoverShadow} 0 -3px 0 inset;
    color: white;
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(3px);
  }
`;

export default function BannerSectionButton({ sectionData }) {
  const onScrollSection = () => {
    console.log(sectionData.ref);
    sectionData.ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <StyledSectionButton
      color={sectionData.color}
      shadow={sectionData.shadow}
      $hoverShadow={sectionData.hoverShadow}
      onClick={onScrollSection}
    >
      {sectionData.name}
    </StyledSectionButton>
  );
}
