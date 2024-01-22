import styled from 'styled-components';
import SignatureText from '@/components/common/SignatureText';

const StyledSectionHeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  colorHSL,
  style = {},
}) {
  return (
    <StyledSectionHeaderArea style={{ ...style }}>
      <SignatureText
        fontSize={80}
        colorHSL={colorHSL}
        props={{ className: 'fade-in-slide-down-suspend' }}
        style={{
          'font-family': 'Raleway',
          'letter-spacing': '15px',
          'margin-top': '2rem',
          'margin-bottom': '1rem',
        }}
      >
        {mainTitle}
      </SignatureText>
      {/* <h1 className={`fade-in-slide-down-suspend`}>{mainTitle}</h1> */}
      <h5 className="fade-in-slide-down-suspend">{subTitle}</h5>
    </StyledSectionHeaderArea>
  );
}
