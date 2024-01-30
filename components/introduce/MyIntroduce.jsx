import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { FaBirthdayCake, FaMale, FaLinkedin } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import IntroduceMiniBlock from './IntroduceMiniBlock';

const StyledMyIntroduce = styled.div`
  width: 100%;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  .introduce-mini-block {
    display: flex;
    flex-direction: column;
  }
`;

export default function MyIntroduce() {
  const MY_INTRODUCE_INFO_DATA = [
    {
      logo: <FaBirthdayCake />,
      value: '2000.09.19',
    },
    {
      logo: <FaMale />,
      value: '이시현',
    },
    {
      logo: <FcGoogle />,
      value: 'antoliny0919@gmail.com',
    },
    {
      logo: <IoLogoGithub />,
      value: 'https://github.com/Antoliny0919',
      color: '#24292e',
    },
    {
      logo: <FaLinkedin />,
      value: 'https://www.linkedin.com/in/antoliny0919/',
      color: '#0a66c2',
    },
  ];

  return (
    <StyledMyIntroduce>
      <div className="introduce-mini-block">
        {MY_INTRODUCE_INFO_DATA.map((item, index) => {
          return (
            <IntroduceMiniBlock
              key={index}
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
