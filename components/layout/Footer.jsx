import Link from 'next/link';
import styled from 'styled-components';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import Logo, { StyledLogoArea } from '../common/Logo';
import { CATEGORY_DATA } from '../category/data';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor[0]};
  font-size: 14px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  color: #f8f8f8;
  font-family: 'RaleWay';
  margin-top: 100px;
  .content {
    @media screen and (min-width: 768px) {
      flex-direction: row;
      padding: 2em 1em;
    }
    display: flex;
    width: 1024px;
    padding: 2em 2em;
    flex-direction: column;
  }
  ${StyledLogoArea} {
    @media screen and (min-width: 768px) {
      padding-top: 20px;
      margin-bottom: 10px;
    }
    font-size: 28px;
  }
`;

const StyledContentBox = styled.div`
  @media screen and (max-width: 768px) {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  flex-basis: 25%;
  .symbol {
    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 350px) {
      display: flex;
      flex-direction: column;
    }
  }
  .title {
    font-size: 16px;
    margin-bottom: 30px;
    font-weight: 900;
  }
  ul {
    padding: 0;
  }
  li {
    line-height: 26px;
    margin-bottom: 26px;
    list-style-type: none;
    &.have-logo,
    &.have-logo a {
      display: flex;
      align-items: center;
    }
  }
  a {
    color: #f8f8f8;
  }
  a:hover {
    text-decoration: underline;
  }
  svg {
    margin-right: 16px;
    width: 18px;
    height: 18px;
  }
`;

export default function Footer() {
  const contactCreatorLink = [
    {
      href: 'https://github.com/Antoliny0919',
      logo: <IoLogoGithub />,
      title: 'Github',
    },
    {
      href: 'https://www.linkedin.com/in/antoliny0919',
      logo: <FaLinkedin />,
      title: 'Linkedin',
    },
    {
      href: 'https://stackoverflow.com/users/19090490/antoliny',
      logo: <FaStackOverflow />,
      title: 'Stack Overflow',
    },
  ];

  const sourceCodeLink = [
    {
      href: 'https://github.com/Antoliny0919/ancean',
      title: 'Main',
    },
    {
      href: 'https://github.com/Antoliny0919/ancean-front',
      title: 'Front',
    },
    {
      href: 'https://github.com/Antoliny0919/ancean-back',
      title: 'Back',
    },
  ];

  const usedCoreFramework = [
    {
      logo: CATEGORY_DATA['DJANGO']['logo'],
      title: 'Django',
    },
    {
      logo: CATEGORY_DATA['NEXT.JS']['logo'],
      title: 'Next.js',
    },
    {
      logo: CATEGORY_DATA['KUBERNETES']['logo'],
      title: 'Kubernetes',
    },
  ];

  return (
    <StyledFooter>
      <div className="content">
        <StyledContentBox>
          <div className="symbol">
            <Logo />
            <div>Language : Korea</div>
          </div>
        </StyledContentBox>
        <StyledContentBox>
          <p className="title">Create</p>
          <ul>
            <li>Antoliny0919</li>
            {contactCreatorLink.map((data, index) => {
              return (
                <li key={index} className="have-logo">
                  <Link href={data.href}>
                    {data.logo}
                    {data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </StyledContentBox>
        <StyledContentBox>
          <p className="title">Source Code</p>
          <ul>
            {sourceCodeLink.map((data, index) => {
              return (
                <li key={index}>
                  <Link href={data.href}>{data.title}</Link>
                </li>
              );
            })}
          </ul>
        </StyledContentBox>
        <StyledContentBox>
          <p className="title">Core Framework</p>
          <ul>
            {usedCoreFramework.map((data, index) => {
              return (
                <li key={index} className="have-logo">
                  {data.logo}
                  {data.title}
                </li>
              );
            })}
          </ul>
        </StyledContentBox>
      </div>
    </StyledFooter>
  );
}
