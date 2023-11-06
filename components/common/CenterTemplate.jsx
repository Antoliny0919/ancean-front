import styled from 'styled-components';

const StyledCenterTemplate = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-top: 10rem;
  padding-bottom: 10rem;
`;

export default function CenterTemplate({ children }) {
  return <StyledCenterTemplate>{children}</StyledCenterTemplate>;
}
