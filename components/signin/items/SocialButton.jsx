import Link from 'next/link';
import styled from 'styled-components';

const StyledSocialButtonCover = styled.div`
  --google-symbol: #dcaeae;
  --github-symbol: #565656;
  --kakao-symbol: #4b2d11;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.8rem;
  color: white;
  transition: all 0.7s;
  background-color: ${({ theme }) => theme.colors.socialBackground};
  &:hover {
    cursor: pointer;
    border-radius: 0.2rem;
    color: #f8f8f8;
  }
  &:hover.google {
    background-color: var(--google-symbol);
  }
  &:hover.github {
    background-color: var(--github-symbol);
  }
  &:hover.kakao {
    background-color: var(--kakao-symbol);
  }
  & + & {
    margin-top: 1rem;
  }
  span {
    font-size: 14px;
  }
`;

const StyledSocialButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: black;
  svg {
    width: 2rem;
    height: 2rem;
  }
  &.github {
    background-color: #f8f8f8;
  }
  &.kakao {
    color: #fee500;
  }
`;

export default function SocialButton({ logo, title, className, href }) {
  return (
    <StyledSocialButtonCover className={className}>
      <StyledSocialButton className={className} href={href}>
        {logo}
      </StyledSocialButton>
      <span>{title}</span>
    </StyledSocialButtonCover>
  );
}
