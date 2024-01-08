import Link from 'next/link';
import styled from 'styled-components';
import Logo from './Logo';

const StyledNavbar = styled.nav`
  height: 66px;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  box-sizing: content-box;
  justify-content: space-between;
  font-family: 'Pretendard-Bold';
`;

const StyledNavSideBar = styled.div`
  display: flex;
  font-size: 26px;
  letter-spacing: 2px;
  font-weight: 700;
  a + a {
    margin-left: 40px;
  }
  .category {
    color: hsl(177, 75%, 50%);
    text-shadow:
      0.5px 0.5px hsl(177, 75%, 45%),
      1px 1px hsl(177, 75%, 40%),
      1.5px 1.5px hsl(177, 75%, 35%),
      2px 2px hsl(177, 75%, 30%),
      2.5px 2.5px hsl(177, 75%, 25%),
      3px 3px hsl(177, 75%, 20%);
  }

  .writing {
    color: hsl(190, 75%, 50%);
    text-shadow:
      0.5px 0.5px hsl(190, 75%, 45%),
      1px 1px hsl(190, 75%, 40%),
      1.5px 1.5px hsl(190, 75%, 35%),
      2px 2px hsl(190, 75%, 30%),
      2.5px 2.5px hsl(190, 75%, 25%),
      3px 3px hsl(190, 75%, 20%);
  }
  .about-me {
    color: hsl(212, 75%, 50%);
    text-shadow:
      0.5px 0.5px hsl(212, 75%, 45%),
      1px 1px hsl(212, 75%, 40%),
      1.5px 1.5px hsl(212, 75%, 35%),
      2px 2px hsl(212, 75%, 30%),
      2.5px 2.5px hsl(212, 75%, 25%),
      3px 3px hsl(212, 75%, 20%);
  }
`;

export default function Navbar() {
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
    <StyledNavbar>
      <Logo fontSize={40} />
      <StyledNavSideBar>
        {sideBarProps.map(({ name, href, className }, index) => {
          return (
            <Link key={index} href={href} className={className}>
              <div>{name}</div>
            </Link>
          );
        })}
      </StyledNavSideBar>
    </StyledNavbar>
  );
}
