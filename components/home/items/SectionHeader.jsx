import { Raleway } from 'next/font/google';
import styled from 'styled-components';

const RaleWayFont = Raleway({
  subsets: ['latin'],
});

const StyledSectionHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.$alignItems};
  h1 {
    font-size: 64px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
    letter-spacing: 15px;
    text-transform: uppercase;
    color: ${(props) => props.color};
    text-shadow: ${(props) => props.shadow};
  }
  h5 {
    margin: 0;
    font-family: 'GmarketSansMedium';
    font-size: 18px;
    margin-bottom: 2rem;
  }
`;

export default function SectionHeader({
  mainTitle,
  subTitle,
  color,
  shadow,
  alignItems = 'center',
}) {
  return (
    <StyledSectionHeaderArea
      color={color}
      shadow={shadow}
      $alignItems={alignItems}
    >
      <h1 className={`${RaleWayFont.className} fade-in-slide-down-suspend`}>
        {mainTitle}
      </h1>
      <h5 className="fade-in-slide-down-suspend">{subTitle}</h5>
    </StyledSectionHeaderArea>
  );
}
