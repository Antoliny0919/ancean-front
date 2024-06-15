import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeOption } from '../../components/project/modules/project';
import { flex } from '../../styles/variable';
import ProjectButton from '../../components/project/ProjectButton';
import { PROJECT_HOME_BUTTON_DATA } from '../../components/project/data';
import ProjectSettingForm from '../../components/project/ProjectOptionForm';

const StyledProjectCover = styled.main`
  @media screen and (min-width: 450px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  margin: 8rem 0;
  font-family: 'NanumBarunGothic';
  font-size: 8px;
`;

const StyledProject = styled.div`
  ${flex('row', 'space-evenly', 'center')}
  padding: 2rem;
`;

export default function Project() {
  const dispatch = useDispatch();

  return (
    <StyledProjectCover>
      <StyledProject>
        {PROJECT_HOME_BUTTON_DATA.map(({ title, logo, buttonProps }, index) => {
          return (
            <ProjectButton
              key={index}
              title={title}
              logo={logo}
              buttonProps={{
                ...buttonProps,
                props: {
                  ...buttonProps.props,
                  onClick: (e) => dispatch(changeOption(e.currentTarget.name)),
                },
              }}
            ></ProjectButton>
          );
        })}
        <ProjectSettingForm />
      </StyledProject>
    </StyledProjectCover>
  );
}
