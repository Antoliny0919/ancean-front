import styled from 'styled-components';
import { forwardRef } from 'react';

const StyledSectionCover = styled.section`
  width: 100%;
  height: 100%;
`;

const SectionContainer = forwardRef((props, ref) => {
  return <StyledSectionCover ref={ref}>{props.children}</StyledSectionCover>;
});

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;
