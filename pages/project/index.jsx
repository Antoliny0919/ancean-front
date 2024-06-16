import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { changeOption } from '../../components/project/modules/project';
import { flex } from '../../styles/variable';
import ProjectOption from '../../components/project/ProjectOption';
import AuthGateway from '../../components/auth/AuthGateway';
import { PROJECT_HOME_BUTTON_DATA } from '../../components/project/data';

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
    <AuthGateway>
      <StyledProjectCover>
        <StyledProject>
          {PROJECT_HOME_BUTTON_DATA.map(
            ({ title, logo, buttonProps }, index) => {
              return (
                <ProjectOption
                  key={index}
                  title={title}
                  logo={logo}
                  optionProps={{
                    ...buttonProps,
                    props: {
                      ...buttonProps.props,
                      onClick: (e) =>
                        dispatch(changeOption(e.currentTarget.name)),
                    },
                  }}
                ></ProjectOption>
              );
            },
          )}
        </StyledProject>
      </StyledProjectCover>
    </AuthGateway>
  );
}
