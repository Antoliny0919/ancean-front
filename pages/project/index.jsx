import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeOption } from '../../components/project/modules/project';
import ProjectOption from '../../components/project/ProjectOption';
import AuthGateway from '../../components/auth/AuthGateway';
import SignatureText, {
  StyledSignatureText,
} from '../../components/common/SignatureText';
import {
  PROJECT_HOME_BUTTON_DATA,
  PROJECT_HOME_TITLE_DATA,
} from '../../components/project/data';
import { flex } from '../../styles/variable';
import css from 'styled-jsx/css';

const StyledProjectCover = styled.main`
  @media screen and (min-width: 450px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  margin: 6rem 0;
  font-family: 'NanumBarunGothic';
  font-size: 8px;
  ${flex('column', 'center', 'center')};
`;

const StyledProjectTitle = styled.div`
  opacity: 0;
  transition:
    transform 1s ease-out,
    opacity 1s ease-in;
  transform: translateY(100px);
  ${({ $isActive }) =>
    $isActive &&
    css`
      opacity: 1;
      transform: translateY(0px);
    `}
  ${StyledSignatureText} {
    font-size: 4.5em;
    margin-bottom: 0.5em;
    letter-spacing: 7px;
  }
`;

const StyledProject = styled.div`
  width: 100%;
  ${flex('row', 'space-evenly', 'center')};
  padding: 2rem;
`;

export default function Project() {
  const dispatch = useDispatch();

  const selectedOption = useSelector(({ project }) => project.selectedOption);

  return (
    <AuthGateway>
      <StyledProjectCover>
        <StyledProjectTitle $isActive={selectedOption}>
          {selectedOption && (
            <SignatureText {...PROJECT_HOME_TITLE_DATA[selectedOption]} />
          )}
        </StyledProjectTitle>
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
