import Image from 'next/image';
import styled from 'styled-components';
import BannerImage from '@/public/istock-banner-image.jpg';
import Logo from '@/components/common/Logo';

const StyledBannerArea = styled.section`
  width: 100%;
  height: 100%;
  .banner-content {
    position: relative;
    flex-direction: column;
    width: 50%;
    bottom: 300px;
    left: 10%;
    p {
      margin: 0;
    }
  }
`;

const StyledSectionButton = styled.button`
  border-radius: 10px;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 16px;
  color: #f8f8f8;
  border: none;
  background-color: ${(props) => props.color};
  box-shadow:
    rgba(45, 35, 66, 0.4) 0 3px 5px,
    rgba(45, 35, 66, 0.3) 0 8px 12px -3px,
    ${(props) => props.shadow} 0 -3px 0 inset;
  transition:
    box-shadow 0.4s,
    transform 0.4s,
    color 0.4s,
    background-color 0.4s;
  & + & {
    margin-left: 1.3rem;
  }
  &:hover {
    cursor: pointer;
    box-shadow:
      rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 8px 12px -3px,
      ${(props) => props.$hoverShadow} 0 -3px 0 inset;
    color: white;
    transform: translateY(-3px);
  }
  &:active {
    box-shadow: #d6d6e7 0 3px 7px inset;
    transform: translateY(3px);
  }
`;

const StyledHomePageSectionLink = styled.div`
  margin-top: 1rem;
`;

export default function BannerMain() {
  const sections = [
    {
      name: 'Popular Writing',
      color: 'hsl(215, 58%, 59%)',
      shadow: 'hsl(215, 58%, 40%)',
      hoverShadow: 'hsl(215, 58%, 70%)',
    },
    {
      name: 'Top Categories',
      color: 'hsl(181, 81%, 40%)',
      shadow: 'hsl(181, 81%, 25%)',
      hoverShadow: 'hsl(181, 81%, 60%)',
    },
    {
      name: 'Latest Posts',
      color: 'hsl(237, 46%, 60%)',
      shadow: 'hsl(237, 46%, 40%)',
      hoverShadow: 'hsl(237, 46%, 70%)',
    },
  ];

  return (
    <StyledBannerArea>
      <Image src={BannerImage} alt="no-image" style={{ width: '100%' }}></Image>
      <div className="banner-content">
        <Logo fontsize={100} />
        <p>안톨리니의 경험으로 만들어진 바다에 당신을 초대합니다.</p>
        <StyledHomePageSectionLink>
          {sections.map((section, index) => {
            return (
              <StyledSectionButton
                key={index}
                color={section.color}
                shadow={section.shadow}
                $hoverShadow={section.hoverShadow}
              >
                # {section.name}
              </StyledSectionButton>
            );
          })}
        </StyledHomePageSectionLink>
      </div>
    </StyledBannerArea>
  );
}
