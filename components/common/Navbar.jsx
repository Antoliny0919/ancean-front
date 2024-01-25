import styled, { css } from 'styled-components';
import Logo from './Logo';
import Link from 'next/link';
import { StyledLogoArea } from './Logo';
import { flexBox } from '../../styles/variable';

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
  .category {
    color: hsl(177, 75%, 50%);
    transition: text-shadow 0.5s;
    text-shadow:
      0.5px 0.5px hsl(177, 75%, 45%),
      1px 1px hsl(177, 75%, 40%),
      1.5px 1.5px hsl(177, 75%, 35%),
      2px 2px hsl(177, 75%, 30%),
      2.5px 2.5px hsl(177, 75%, 25%),
      3px 3px hsl(177, 75%, 20%);
  }
  .category:hover {
    text-shadow:
      0.5px 0.5px hsl(177, 75%, 45%),
      1px 1px hsl(177, 75%, 40%),
      1.5px 1.5px hsl(177, 75%, 35%),
      2px 2px hsl(177, 75%, 30%),
      2.5px 2.5px hsl(177, 75%, 25%),
      3px 3px hsl(177, 75%, 20%),
      3.5px 3.5px hsl(177, 75%, 17%),
      4px 4px hsl(177, 75%, 14%),
      4.5px 4.5px hsl(177, 75%, 11%),
      5px 5px hsl(177, 75%, 8%);
  }

  .writing {
    color: hsl(190, 75%, 50%);
    transition: text-shadow 0.5s;
    text-shadow:
      0.5px 0.5px hsl(190, 75%, 45%),
      1px 1px hsl(190, 75%, 40%),
      1.5px 1.5px hsl(190, 75%, 35%),
      2px 2px hsl(190, 75%, 30%),
      2.5px 2.5px hsl(190, 75%, 25%),
      3px 3px hsl(190, 75%, 20%);
  }
  .writing:hover {
    text-shadow:
      0.5px 0.5px hsl(190, 75%, 45%),
      1px 1px hsl(190, 75%, 40%),
      1.5px 1.5px hsl(190, 75%, 35%),
      2px 2px hsl(190, 75%, 30%),
      2.5px 2.5px hsl(190, 75%, 25%),
      3px 3px hsl(190, 75%, 20%),
      3.5px 3.5px hsl(190, 75%, 17%),
      4px 4px hsl(190, 75%, 14%),
      4.5px 4.5px hsl(190, 75%, 11%),
      5px 5px hsl(190, 75%, 8%);
  }
`;

const StyledAboutMeButton = styled.button`
  /* CSS */
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
  ${flexBox.flex()}
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
  const exceptRoute = ['/posts/newpost', '/category'];

  const sideBarProps = [
    {
      name: 'CATEGORY',
      href: '/category',
      className: 'category',
    },
    {
      name: 'WRITING',
      href: '/posts',
      className: 'writing',
    },
  ];

  return (
    <>
      {exceptRoute.includes(currentPathName) || (
        <StyledNavbar $currentPathName={currentPathName}>
          {currentPathName !== '/' ? <Logo /> : <div></div>}
          <StyledNavSideBar>
            {sideBarProps.map(({ name, href, className }, index) => {
              return (
                <Link key={index} href={href} className={className}>
                  <div>{name}</div>
                </Link>
              );
            })}
            <Link href={'/'}>
              <StyledAboutMeButton role="button"></StyledAboutMeButton>
            </Link>
          </StyledNavSideBar>
        </StyledNavbar>
      )}
    </>
  );
}
