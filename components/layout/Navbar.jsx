import styled, { css } from 'styled-components';
import Link from 'next/link';
import Logo from '../common/Logo';
import SignatureTextButton from '../button/SignatureTextButton';
import LenticularButton from '../button/LenticularButton';
import { NAVBAR_EXCEPT_ROUTE, NAVBAR_SIDEBAR_PROPS } from './data';

const StyledNavbar = styled.nav`
  @media screen and (min-width: 768px) {
    font-size: 12px;
    justify-content: space-between;
  }
  ${(props) =>
    // if currentPath is home --> apply absolute position(overlapping the top and navbar)
    props.$currentPathName === '/' &&
    css`
      position: absolute;
      z-index: 10;
    `}
  width: 100%;
  height: 100px;
  font-size: 14px;
  padding: 0.5em 3em;
  max-width: 2048px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard-Bold';
`;

const StyledNavSideBar = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 1.2em;
  a + a {
    margin-left: 40px;
  }
`;

export default function Navbar({ currentPathName }) {
  return (
    <header>
      {/* verify that the layout applies to the current path */}
      {NAVBAR_EXCEPT_ROUTE.includes(currentPathName) || (
        <StyledNavbar $currentPathName={currentPathName}>
          {/* the home path has a layout, but the logo is not shown */}
          {currentPathName !== '/' ? <Logo waveHeight={30} /> : <div></div>}
          <StyledNavSideBar>
            {NAVBAR_SIDEBAR_PROPS.map(({ name, href, hsl }, index) => {
              return (
                <Link href={href} key={index}>
                  <SignatureTextButton key={index} hsl={hsl}>
                    {name}
                  </SignatureTextButton>
                </Link>
              );
            })}
            <Link href={'/'}>
              <LenticularButton
                offText="ABOUT ME"
                onText="ANTOLINY0919"
                backgroundColor={({ theme }) => theme.colors.lightWhite}
                borderColor="#3e3e3e"
              />
            </Link>
          </StyledNavSideBar>
        </StyledNavbar>
      )}
    </header>
  );
}
