import styled from 'styled-components';
import { flex } from '../../styles/variable';
import ProjectButton from '../../components/project/ProjectButton';
import { PROJECT_HOME_BUTTON_DATA } from '../../components/project/data';

const StyledProjectCover = styled.main`
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  margin: 8rem 0;
  font-family: 'NanumBarunGothic';
  font-size: 14px;
`;

const StyledProject = styled.div`
  ${flex('row', 'space-evenly', 'center')}
  padding: 2rem;
`;

export default function Project() {
  return (
    <StyledProjectCover>
      <StyledProject>
        {PROJECT_HOME_BUTTON_DATA.map(({ title, logo, buttonProps }, index) => {
          return (
            <ProjectButton
              key={index}
              title={title}
              logo={logo}
              buttonProps={buttonProps}
            ></ProjectButton>
          );
        })}
      </StyledProject>
    </StyledProjectCover>
  );
}
