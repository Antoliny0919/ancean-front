import { forwardRef } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';

const StyledSection = styled.section`
  height: inherit;
  width: inherit;
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
