import styled, { css } from 'styled-components';
import Link from 'next/link';
import Logo, { StyledLogoArea } from '../common/Logo';
import SignatureTextButton from '../button/SignatureTextButton';
import { NAVBAR_EXCEPT_ROUTE, NAVBAR_SIDEBAR_PROPS } from './data';
import { flex } from '../../styles/variable';

const StyledNavbar = styled.nav`
  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 100px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
  ${(props) =>
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
`;

const StyledAboutMeButton = styled.button`
  /* CSS */
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  ${flex('row', 'center', 'center')};
  background-color: #f4f4f4;
  border: 2px solid #3e3e3e;
  border-radius: 30px;
  box-shadow: #3e3e3e 3px 3px 0 0;
  color: #3e3e3e;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  padding: 0.5em 0.8em;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    &::before {
      opacity: 0;
    }
    &::after {
      opacity: 1;
    }
    background-color: #fff;
  }

  &:active {
    box-shadow: #3e3e3e 2px 2px 0 0;
    transform: translate(2px, 2px);
  }
  &::before {
    position: absolute;
    content: 'ABOUT ME';
    transition-property: opacity;
    transition-delay: 0.15s;
    transition-duration: 0.5s;
    width: inherit;
    z-index: 0;
  }

  &::after {
    position: relative;
    content: 'ANTOLINY0919';
    opacity: 0;
    z-index: 5;
    transition-property: opacity;
    transition-delay: 0.15s;
    transition-duration: 0.5s;
  }
`;

export default function Navbar({ currentPathName }) {
  return (
    <header>
      {NAVBAR_EXCEPT_ROUTE.includes(currentPathName) || (
        <StyledNavbar $currentPathName={currentPathName}>
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
              <StyledAboutMeButton role="button"></StyledAboutMeButton>
            </Link>
          </StyledNavSideBar>
        </StyledNavbar>
      )}
    </header>
  );
}
