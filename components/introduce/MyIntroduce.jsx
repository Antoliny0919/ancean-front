import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaBirthdayCake, FaMale, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import IntroduceMiniBlock from './IntroduceMiniBlock';

const StyledMyIntroduce = styled.div`
  height: 100%;
  width: 100%;
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  /* .introduce-mini-block {
    display: flex;
    flex-direction: column;
  } */
`;

export default function MyIntroduce() {
  const MY_INTRODUCE_INFO_DATA = [
    {
      logo: <FaBirthdayCake />,
      title: '',
      subTitle: '2000.09.19',
    },
    {
      logo: <FaMale />,
      subTitle: '이시현',
    },
    {
      logo: <FcGoogle />,
      subTitle: 'antoliny0919@gmail.com',
    },
    {
      logo: <IoLogoGithub />,
      subTitle: 'https://github.com/Antoliny0919',
      color: '#24292e',
    },
    {
      logo: <FaLinkedin />,
      subTitle: 'https://www.linkedin.com/in/antoliny0919',
      color: '#0a66c2',
    },
  ];

  const [introduceBlockAnimationState, setIntroduceBlockAnimationState] =
    useState(false);

  const target = useRef(null);

  useEffect(() => {
    const introduceBlockObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((item) => {
          if (item.isIntersecting) {
            setIntroduceBlockAnimationState(true);
            observer.unobserve(target.current);
          }
        });
      },
      { threshold: 0.1 },
    );
    introduceBlockObserver.observe(target.current);
  });

  return (
    <StyledMyIntroduce>
      <div className="introduce-mini-block" ref={target}>
        {MY_INTRODUCE_INFO_DATA.map((item, index) => {
          return (
            <IntroduceMiniBlock
              key={index}
              animationState={introduceBlockAnimationState}
              subTitle={item.subTitle}
              color={item.color && item.color}
              isOdd={(index + 1) % 2 === 1}
            >
              {item.logo}
            </IntroduceMiniBlock>
          );
        })}
      </div>
    </StyledMyIntroduce>
  );
}
