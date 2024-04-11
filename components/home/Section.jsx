import { forwardRef } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

const StyledSection = styled.section`
  @media screen and (min-width: 450px) {
    font-size: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
  height: inherit;
  width: inherit;
  font-size: 6px;
`;

const Section = forwardRef(({ children, sectionHeaderProps }, ref) => {
  return (
    <StyledSection ref={ref}>
      {sectionHeaderProps && (
        <SectionHeader {...sectionHeaderProps}></SectionHeader>
      )}
      {children}
    </StyledSection>
  );
});

Section.displayName = 'SectionContainer';

export default Section;
