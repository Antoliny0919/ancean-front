// import Image from 'next/image';
import styled from 'styled-components';
// import AnceanLogo from '@/public/ancean-logo-simple.png';

const StyledNavbarArea = styled.section`
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(16, 88, 106, 0.2) 0%,
    rgba(41, 140, 182, 0.2) 23%,
    rgba(9, 102, 149, 0.2) 45%,
    rgba(8, 58, 108, 0.2) 63%,
    rgba(14, 52, 90, 0.2) 81%
  );
`;

export default function NavbarMain() {
  return (
    <StyledNavbarArea>
      {/* <Image src={AnceanLogo} width={200} heihgt={30}></Image> */}
    </StyledNavbarArea>
  );
}
