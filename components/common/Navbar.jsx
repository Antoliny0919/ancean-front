import Link from 'next/link';
import { Bodoni_Moda } from 'next/font/google';
import styled from 'styled-components';
import Logo from './Logo';

const BodoniFont = Bodoni_Moda({
  subsets: ['latin'],
});

const StyledNavbar = styled.nav`
  height: 66px;
  /* background-color: red; */
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  justify-content: space-between;
`;

const StyledMainPagesLinkBar = styled.div`
  display: flex;
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: 700;
  a + a {
    margin-left: 40px;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <Logo fontSize={40} />
      <StyledMainPagesLinkBar className={BodoniFont.className}>
        <Link href="/category">
          <div className="">CATEGORY</div>
        </Link>
        <Link href="/posts">
          <div className="">WRITING</div>
        </Link>
        <Link href="/">
          <div className="">ABOUT ME</div>
        </Link>
      </StyledMainPagesLinkBar>
    </StyledNavbar>
  );
}
