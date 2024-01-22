import styled from 'styled-components';
import SiteInformation from './SiteInformation';
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io5';
import { flexBox, footer } from '../../styles/variable';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  margin-top: 100px;
`;

const StyledIntroduceCreatorBlock = styled.div`
  ${footer.smallBox()};
  ${flexBox.flex()};
  background-color: rgba(53, 148, 214, 0.3);
  & > * {
    margin-right: 3rem;
  }

  .link-block {
    display: flex;
    align-items: center;
    padding: 0.2rem 1rem;
    border-radius: 10px;
    & > * {
      margin-right: 10px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    &.github {
      color: #f8f8f8;
      background-color: #24292e;
    }
    &.linkedin {
      color: #f8f8f8;
      background-color: #0077b5;
    }
  }
`;

const StyledSourceCodeLinkBlock = styled.div`
  ${footer.smallBox()};
  ${flexBox.flex()};
  background-color: rgba(47, 85, 166, 0.3);
  & > * {
    margin-right: 3rem;
  }
  a {
    color: black;
    background-color: white;
    padding: 0.2rem 1rem;
    border-radius: 10px;
  }
`;

export default function Footer() {
  const introduceBlockProps = [
    {
      href: 'https://github.com/Antoliny0919',
      className: 'link-block github',
      logo: <IoLogoGithub />,
      children: 'GITHUB',
    },
    {
      href: 'https://www.linkedin.com/in/antoliny0919/',
      className: 'link-block linkedin',
      logo: <FaLinkedin />,
      children: 'LINKEDIN',
    },
  ];

  const sourceCodeBlockProps = [
    {
      children: 'MAIN',
      href: 'https://github.com/Antoliny0919/ancean',
      style: { 'background-color': 'hsl(182, 58%, 50%)' },
    },
    {
      children: 'FRONT',
      href: 'https://github.com/Antoliny0919/ancean-front',
      style: { 'background-color': 'hsl(205, 54%, 61%)' },
    },
    {
      children: 'BACK',
      href: 'https://github.com/Antoliny0919/ancean-back',
      style: { 'background-color': 'hsl(221, 54%, 51%)' },
    },
  ];

  return (
    <StyledFooter>
      <SiteInformation />
      <StyledIntroduceCreatorBlock>
        <span>Who is Antoliny0919 ?</span>
        {introduceBlockProps.map((props, index) => {
          return (
            <Link key={index} href={props.href} target="_blank">
              <div className={props.className}>
                {props.logo}
                {props.children}
              </div>
            </Link>
          );
        })}
      </StyledIntroduceCreatorBlock>
      <StyledSourceCodeLinkBlock>
        <span>Ancean Source Code</span>
        {sourceCodeBlockProps.map((props, index) => {
          return <Link key={index} {...props} target="_blank"></Link>;
        })}
      </StyledSourceCodeLinkBlock>
    </StyledFooter>
  );
}
