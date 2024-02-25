import styled, { css } from 'styled-components';
import Link from 'next/link';
import Logo, { StyledLogoArea } from '../common/Logo';
import SignatureTextButton from '../button/SignatureTextButton';
import LenticularButton, {
  StyledLenticularButton,
} from '../button/LenticularButton';
import { NAVBAR_EXCEPT_ROUTE, NAVBAR_SIDEBAR_PROPS } from './data';

const StyledNavbar = styled.nav`
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 100px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
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
  padding: 0.5em 3em;
  max-width: 2048px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Pretendard-Bold';
  ${StyledLogoArea} {
    @media screen and (min-width: 450px) {
      font-size: 50px;
    }
    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 50px;
    }
    font-size: 40px;
  }
`;

const StyledNavSideBar = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  font-weight: 700;
  a + a {
    margin-left: 40px;
  }
  ${StyledLenticularButton} {
    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
    font-size: 13px;
  }
`;

export default function Navbar({ currentPathName }) {
  return (
    <header>
      {/* verify that the layout applies to the current path */}
      {NAVBAR_EXCEPT_ROUTE.includes(currentPathName) || (
        <StyledNavbar $currentPathName={currentPathName}>
          {/* the home path has a layout, but the logo is not shown */}
          {currentPathName !== '/' ? <Logo /> : <div></div>}
          <StyledNavSideBar>
            {NAVBAR_SIDEBAR_PROPS.map(({ name, href, hsl }, index) => {
              return (
                <Link href={href} key={index}>
                  <SignatureTextButton key={index} hsl={hsl} fontSize={24}>
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
