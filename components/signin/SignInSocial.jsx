import styled from 'styled-components';
import { SOCIAL_LOGIN_DATA } from './data';
import SocialButton from './items/SocialButton';

const StyledSocialLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem;
  font-weight: bold;
`;

export default function SignInSocial() {
  return (
    <StyledSocialLoginContainer>
      {SOCIAL_LOGIN_DATA.map(({ logo, title, className, href }, index) => {
        return (
          <SocialButton
            logo={logo}
            title={title}
            className={className}
            href={href}
            key={index}
          />
        );
      })}
    </StyledSocialLoginContainer>
  );
}
