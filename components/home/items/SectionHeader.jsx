import styled from 'styled-components';
import SignatureText from '@/components/common/SignatureText';

const StyledSectionHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    @media screen and (min-width: 768px) {
      font-size: 16px;
      margin-bottom: 1.5em;
    }
    @media screen and (min-width: 1024px) {
      font-size: 20px;
      margin-bottom: 2em;
    }
    font-size: 12px;
    margin-bottom: 1em;
    margin: 0;
    font-family: 'GmarketSansMedium';
  }
`;

export default function SectionHeader({
  mainTitle,
  subTitle,
  colorHSL,
  style = {},
}) {
  return (
    <StyledSectionHeaderArea style={{ ...style }}>
      <SignatureText
        fontSize={24}
        colorHSL={colorHSL}
        props={{ className: 'fade-in-slide-down-suspend' }}
        style={{
          fontFamily: 'Raleway',
          marginTop: '2rem',
          marginBottom: '1rem',
        }}
      >
        {mainTitle}
      </SignatureText>
      <h5 className="fade-in-slide-down-suspend">{subTitle}</h5>
    </StyledSectionHeaderArea>
  );
}
